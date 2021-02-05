import "reflect-metadata";
import { createConnection } from 'typeorm';
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const port = 3333;
const app = express();
createConnection()
app.use(bodyParser.json())
app.use(routes)

app.listen(port, () => console.log(`subiu na porta ${port}`))