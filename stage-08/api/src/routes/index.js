const { Router } = require("express");

const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")

const routes = Router()

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);

module.exports = routes