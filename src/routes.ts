import { Router, Response, Request } from "express";
import { indexTasks, storeTasks }  from '../src/controller/TasksController'; 
const routes = Router();

routes.get('/index', indexTasks);
routes.post('/store', storeTasks);

export default routes;