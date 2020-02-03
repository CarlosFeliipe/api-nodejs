const UserController = require("./App/Controllers/userController");
const Validade = require("./App/Middleware/validade");
const { Router } = require("express");

const routes = Router();

routes.post("/store", Validade.SignUp, UserController.store);

module.exports = routes;