require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const uuid = require("uuid");
const colors = require("colors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");
const logger = require("morgan");
const { User } = require("./models/models.js");

const PORT = process.env.PORT || 5002;

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use(cors());
app.use("/api", router);
app.use(errorHandler);
app.use(logger("combined"));

app.use(logger(formatsLogger));

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`СЕРВЕР ПРАЦЮЄ НА ПОРТУ ${PORT}!`.bgMagenta)
    );

    // Приклад виклику запиту до бази даних та відображення результатів у вигляді таблиці
    const users = await User.findAll(); // Припустимо, що User - це ваша модель користувача
    console.table(users.map((user) => user.toJSON())); // Відображення результатів у вигляді таблиці
  } catch (e) {
    console.log(e);
  }
};

start();
