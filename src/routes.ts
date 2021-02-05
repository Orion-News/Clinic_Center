import { Router, Response, Request } from "express";
import TasksController  from '../src/controller/TasksController'; 
const routes = Router();

// routes.post('/task/store', storeTasks);
// routes.get('/task/:id', showTask);
// routes.put('/task/updated/:id', updateTasks);
routes.get('/tasks/index', TasksController.index);
// routes.patch('/tasks/:id', finishedTask);

export default routes;