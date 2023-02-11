import { Todo } from "../../../models/todo/index.js";

export const createTodo = async (payload, res) => {
  try {
    await Todo.create({ ...payload });
  } catch (error) {
    console.log("todo create error", error);
  }
  res.send();
};

export const getTodosList = async (res) => {
  const todos = await Todo.findAll();
  const todosList = JSON.stringify(todos, null, 2);

  res.send(todosList);

  return todosList;
};
