require("dotenv").config();
const JUGNU = require("./handlers/Client");
const { TOKEN } = require("./settings/config");

const client = new JUGNU();

module.exports = client;

client.start(TOKEN);

process.on("unhandledRejection", (reason, p) => {
  console.log(" [Error_Handling] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});

process.on("uncaughtException", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch");
  console.log(err, origin);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});

const keep_alive = require('./keep_alive.js')

const express = require('express');
const app = express();
const port = 3100;//buraya karışmayın.

app.get('/', (req, res) => res.send('we discord'));//değiştirebilirsiniz.

app.listen(port, () =>
console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)//port
);