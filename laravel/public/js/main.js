const socket_url = document.querySelector('#socket_url').value
const socket = new WebSocket(socket_url)

socket.addEventListener('message', function (event) {
    const { type, data } = JSON.parse(event.data)
    if (type == 'currency') {
        document.querySelector('#currency-updated-date').innerHTML = new Date(Date.now()).toISOString()
        let tableBody = ''
        for (element of data) {
            tableBody += '<tr>'
            tableBody += `<th scope="row">${element.currencyCodeA}</th> `
            tableBody += `<th>${element.currencyCodeB}</th> `
            tableBody += `<th>${element.date}</th> `
            tableBody += `<th>${element.rateBuy || '-'}</th> `
            tableBody += `<th>${element.rateSell || '-'}</th> `
            tableBody += `<th>${element.rateCross || '-'}</th> `
            tableBody += '</tr>'
        }
        document.querySelector('.currency-body').innerHTML = tableBody
    }
})