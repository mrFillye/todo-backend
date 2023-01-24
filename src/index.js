import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./api/todo/controller/todo.controller";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => {
  console.log(`[web]: App listening at port ${port}`);
});
