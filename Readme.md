## About The Project

**1) Creating a REST Web API**

- There is an API for currencies GET
https://api.monobank.ua/bank/currency

- Info cached and don't update more often than every 5 minutes

- The task is to make laravel app with the Dockerfile
This REST API have to forward to the public WebSocket channel and update all connected clients as soon as some info on https://api.monobank.ua/bank/currency updated.

## Build with

-  [laravel](https://laravel.com)

  

## Getting Started

**PHP version 7.4**

  

**Docker version 20.10.13**

  

**For cloning project**

```git clone https://github.com/NicatNagizade/currency.git```


**Getting to inside of the project and copy .env.example file to .env**

```

cd currency

cp laravel/.env.example laravel/.env

cp socket/.env.example socket/.env

```

**Starting the project**

```docker-compose up```

Server will run on [http://localhost:8000]()


## Contact

Nijat Naghizada - [nicatnagizada53@gmail.com]()

Project Link: [https://github.com/NicatNagizade/currency]()
