require('dotenv').config()
const express = require('express')

const  PORT = process.env.PORT || 6000;

const app = express()

app.listen(PORT, () => console.log(`Сервак їбаше на ${PORT} порту!`))