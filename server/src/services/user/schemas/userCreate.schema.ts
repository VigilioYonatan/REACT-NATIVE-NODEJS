import * as z from "zod";
import { UserEntity } from "../entities/user.entity";
import { user } from "./user.schema";

export const userCreateSchema = user
    .omit({ id: true })
    .refine(
        async ({ nombre }) => {
            const user = await UserEntity.findOne({ where: { nombre } });
            return !user;
        },
        { message: "ya existe este nombre", path: ["nombre"] }
    )
    .refine(
        async ({ email }) => {
            const user = await UserEntity.findOne({ where: { email } });
            return !user;
        },
        { message: "ya existe este email", path: ["email"] }
    );
export type UserCreateSchema = z.infer<typeof userCreateSchema>;
