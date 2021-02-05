import { getRepository } from "typeorm";
import { request, Request, Response } from "express";
import { Tasks } from "../entity/Tasks";

class TasksController {

    public async store (request: Request, response: Response): Promise<Response> {
        try {
            const createTasks = await getRepository(Tasks).save(request.body);
            
            const result = {
                status: 201,
                message: 'Successful, create a new Tasks!',
                data: createTasks
            };
    
            return response.json(result);
    
        } catch (e) {
            return response.status(400).json({"Menssage": `${e}`})
        }
    };

    public async show (request: Request, response: Response): Promise<Response> {
            try {
                const { id } = request.params;
                const task = await getRepository(Tasks).findOne(id);
                
                const result = {
                    status: 200,
                    message: 'Successful, find one Task!',
                    data: task
                }
                
                return response.json(result);
        
            } catch (e) {
                return response.status(404).json({ "Menssage": `${e}`})
            }
    };

    public async update (request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const task = await getRepository(Tasks).update(id, request.body);
    
            
            if(task.affected === 1) {
                const taskUpdated = await getRepository(Tasks).findOne(id);
                const result = {
                    status: 200,
                    message: 'Successful, your task updated!',
                    data: taskUpdated
                }
                return response.json(result);
            }
    
            return response.status(404).json({"Mensage": "Task not Found!"});
    
        } catch (e) {
            return response.status(404).json({"Menssage": `${e}`})
        }
    };

    public async index (request: Request, response: Response): Promise<Response> {
        try {
            const tasks = await getRepository(Tasks).find();
            
            if (!tasks) throw new Error(`Deu Xabu, Não tem tasks!`);
    
            const result = {
                status: 200,
                message: 'Successful, find all Tasks',
                data: tasks
            };
            
            return response.json(result);
        
        } catch (e) {
            return response.status(500).json({"Menssage": `${e}`})
        }
    };
}
export default new TasksController();

// export const storeTasks = 

// export const showTask = 

// export const updateTasks = 

// export const indexTasks = async (request: Request, response: Response) => {
//     try {
//         const tasks = await getRepository(Tasks).find();
        
//         if (!tasks) throw new Error(`Deu Xabu, Não tem tasks!`);

//         const result = {
//             status: 200,
//             message: 'Successful, find all Tasks',
//             data: tasks
//         };
        
//         return response.json(result);
    
//     } catch (e) {
//         return response.status(500).json({"Menssage": `${e}`})
//     }
// };

// export const finishedTask = async (request: Request, response: Response) => {
//     try {
//         const { id } = request.params;
//         const task = await getRepository(Tasks).update(id,{ 
//             finished: true
//         });

//         if(task.affected === 1) {
//             const taskUpdated = await getRepository(Tasks).findOne(id);
//             const result = {
//                 status: 200,
//                 message: 'Successful, your task Finish!',
//                 data: taskUpdated
//             }
//             return response.json(result);
//         }

//         return response.status(404).json({"Mensage": "Task not Found!"});

//     } catch (e) {
//         return response.status(500).json({"Menssage": `${e}`})
//     }

// };

// export const deleteTask = async (request: Request, response: Response) => {
//     try {
//         const { id } = request.params;
//         const task = await getRepository(Tasks).delete(id);

//         return response.json( task ? "Task delete with success" : "Task not Removed");
//     } catch (e) {
//         return response.status(404).json({"Menssage" : `${e}`});
//     }
// }