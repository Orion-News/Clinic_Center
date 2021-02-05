import { Router, Response, Request } from "express";
import { indexTasks, storeTasks, showTask, updateTasks }  from '../src/controller/TasksController'; 
const routes = Router();

routes.post('/task/store', storeTasks);
routes.get('/task/:id', showTask);
routes.put('/task/updated/:id', updateTasks);
routes.get('/tasks/index', indexTasks);

export default routes;