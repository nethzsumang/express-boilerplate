import express from "express";
import dotenv from "dotenv";
import IndexController from "./controllers/index.controller";
import { getCurrentUtc } from "./libraries/date.library";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (new IndexController).sayHello);

app.listen(port, () => {
  console.log(`[${getCurrentUtc()}][server]: Server is running at http://localhost:${port}`);
});