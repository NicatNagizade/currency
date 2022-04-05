const axios = require('axios')
const WebSocket = require('ws')
const { WebSocketServer } = WebSocket
const dotenv = require('dotenv')
dotenv.config()

const wss = new WebSocketServer({ port: 8080 })

const currency = {
  timeInterval: 1000 * 60 * 5,
  data: [],
  lastLoadDate: Date.now(),
  loadData(callback = () => { }) {
    axios.get(`${process.env.API_URL}/currency`)
      .then(response => {
        currency.data = response.data
        currency.lastLoadDate = Date.now()
        callback()
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => { })
  }
}

wss.on('connection', function connection(ws) {
  ws.send(JSON.stringify({ type: 'currency', data: currency.data }))
})

function sendCurrency() {
  setInterval(() => {
    currency.loadData(() => {
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'currency', data: currency.data }))
        }
      })
    })
  }, currency.timeInterval)
}

currency.loadData()
sendCurrency()
