import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { User } from "../entity/User";

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'

export const signIn = async (request: Request, response: Response) => {
    const { email, password } = request.body;

    const user = await getRepository(User).find({
        where: {
            email
        }
    });

    console.log(user);
}