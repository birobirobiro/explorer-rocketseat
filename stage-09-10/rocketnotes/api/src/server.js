require("express-async-errors");

const uploadConfig = require('./configs/upload');

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");

const express = require("express");
const cors = require("cors");
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

app.use((err, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));