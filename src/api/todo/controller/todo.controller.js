import express from "express";
import { createTodo, getTodosList } from "../service/todo.service.js";

const contoller = express.Router();

contoller
  .route("/todo")
  .post(async ({ body }, res) => await createTodo(body, res))
  .get(async (_, res) => await getTodosList(res));

export default contoller;
