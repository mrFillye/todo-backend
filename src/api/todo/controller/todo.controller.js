import express from "express";
import { createTodo } from "../service/todo.service.js";

const contoller = express.Router();

contoller.post("/todo", async ({ body }, res) => {
  return await createTodo(body, res);
});

export default contoller;
