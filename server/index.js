require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const uuid = require("uuid");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require('path')

const PORT = process.env.PORT || 5002;

const app = express();

// Додаємо middleware для обробки JSON-даних
app.use(express.json());

// Додаємо middleware для 
app.use(express.static(path.resolve(__dirname, 'static')))

// Додаємо middleware для доступу до завантаження файлів
app.use(fileUpload({}));

// Додаємо middleware CORS для обробки CORS
app.use(cors());

// Додаємо маршрутизацію
app.use("/api", router);

// Додаємо middleware для обробки помилок
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Сервак їбаше на ${PORT} порту!`));
  } catch (e) {
    console.log(e);
  }
};

start();
