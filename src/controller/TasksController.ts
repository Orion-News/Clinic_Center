import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Tasks } from "../entity/Tasks";

export const indexTasks = async (request: Request, response: Response) => {
    try {
        const tasks = await getRepository(Tasks).find();
        
        if (!tasks) throw new Error(`Deu Xabu, Não tem tasks`);

        const result = {
            status: 200,
            message: 'Success full, find all Tasks',
            data: tasks
        };
        
        return response.json(result);
    
    } catch (e) {
        return response.status(400).json({"Menssage": `${e}`})
    }
};

export const storeTasks = async (request: Request, response: Response) => {
    try {
    const createTasks = await getRepository(Tasks).save(request.body);
    
    const result = {
        status: 200,
        message: 'Success full, create a new Tasks',
        data: createTasks
    };

    return response.json(result);

    } catch (e) {
        return response.status(400).json({"Menssage": `${e}`})
    }
}
