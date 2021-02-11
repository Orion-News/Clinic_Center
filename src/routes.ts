import { json, Router } from "express";
import { storeTasks, indexTasks, showTask, deleteTask, finishedTask, updateTasks } from '../src/controller/TasksController'; 
import { storeUser } from '../src/controller/UserController'; 
import { signIn } from '../src/controller/AuthController'; 
import { authenticate } from '../src/middlewares/auth';
const routes = Router();

routes.use(json());
// routes to user
routes.post('/signUp', storeUser);
routes.post('/signIn', signIn);


// routes to tasks
routes.post('/task/store', authenticate, storeTasks);
routes.get('/task/:id', authenticate, showTask);
routes.put('/task/:id', authenticate, updateTasks);
routes.delete('/task/:id', authenticate, deleteTask);
routes.get('/task', authenticate, authenticate, authenticate, indexTasks);
routes.patch('/task/:id', authenticate, finishedTask);


export default routes;