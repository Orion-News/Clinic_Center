import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entity/User";

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'

export const signIn = async (request: Request, response: Response) => {
    try {
        const { email, password } = request.body;

        const user = await getRepository(User).find({
            where: {
                email
            }
        });

        if (!user || !user[0].email) throw new Error(`User not found`);

        if (await bcrypt.compare(password, user[0].password)) throw new Error (`Invalid Password`);

        const token = jwt.sign({ id: user[0].id}, process.env.KEY_SECRET, {
            expiresIn: '1d'
        });

        const data = {
            id: user[0].id,
            name: user[0].name,
            lastName: user[0].lastName,
            email: user[0].email,
            token: token
        };

        const result = {
            status: 200,
            message: 'Successful, create a new Tasks!',
            data: data
        };

        return response.json(result);
    } catch (e) {
        return response.status(401).send({ "Unable to authenticate user" : `${e}`});
    }
}