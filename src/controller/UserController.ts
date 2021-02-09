import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entity/User";

import * as bcrypt from 'bcrypt';

export const storeUser = async (request: Request, response: Response) => {
    try {
        const { name, lastName, password, email } = request.body;
        const hashPass = await bcrypt.hash(password, 10);

        const user = await getRepository(User).save({
            name,
            lastName,
            email,
            password: hashPass
        });

        return response.json(user)
    } catch (e) {
        return response.status(400).json({ "Message" : `${e}`});
    }
}