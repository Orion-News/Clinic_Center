import './config/env';
import "reflect-metadata";
import { createConnection } from 'typeorm';
import routes from "./routes";
import * as express from 'express';
import * as cors from 'cors';


class App {
    public express: express.Application;

    public constructor () {
        this.express = express();
        this.middlewares();
        this.dataBase();
        this.routes();
    }

    private middlewares (): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private dataBase (): void {
        createConnection();
    }

    private routes (): void {
        this.express.use(routes);
    }
}

export default new App().express;