import { Injectable } from "@decorators/di";
import { UserEntity } from "./entities/user.entity";
import { UserCreateSchema } from "./schemas/userCreate.schema";

@Injectable()
export class UserService {
    async index() {
        const users = await UserEntity.findAll();
        return {
            success: true,
            data: users,
        };
    }
    async show(id: string) {
        const user = await UserEntity.findByPk(id);
        return {
            success: true,
            user,
        };
    }

    async create(userCreateSchema: UserCreateSchema) {
        const newUser = new UserEntity(userCreateSchema);
        await newUser.save();
        return {
            success: true,
            user: newUser,
        };
    }
}
