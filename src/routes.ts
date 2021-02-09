import { json, Router } from "express";
import { storeTasks, indexTasks, showTask, deleteTask, finishedTask, updateTasks } from '../src/controller/TasksController'; 
import { storeUser } from '../src/controller/UserController'; 
import { signIn } from '../src/controller/AuthController'; 
const routes = Router();

routes.use(json());
// routes to user
routes.post('/signUp', storeUser);
routes.post('/signIn', signIn);


// routes to tasks
routes.post('/task/store', storeTasks);
routes.get('/task/:id', showTask);
routes.put('/task/:id', updateTasks);
routes.delete('/task/:id', deleteTask);
routes.get('/task', indexTasks);
routes.patch('/task/:id', finishedTask);


export default routes;