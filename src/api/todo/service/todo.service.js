import { Todo } from "../../../models/todo/index.js";

export const createTodo = async (payload, res) => {
  try {
    await Todo.create({ ...payload });
  } catch (error) {
    console.log("todo create error", error);
  }
  res.send();
};
