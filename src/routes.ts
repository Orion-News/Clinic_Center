import { Router, Response, Request } from "express";
import TasksController  from '../src/controller/TasksController'; 
const routes = Router();

routes.post('/task/store', TasksController.store);
routes.get('/task/:id', TasksController.show);
routes.put('/task/:id', TasksController.update);
routes.delete('/task/:id')
routes.get('/task/index', TasksController.index);
routes.patch('/task/:id', TasksController.finishTask);

export default routes;