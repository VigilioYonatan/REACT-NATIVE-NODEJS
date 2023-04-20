import { Controller, Post, Get, Body, Params } from "@decorators/express";
import { Injectable } from "@decorators/di";
import { UserService } from "./user.service";
import { ValidatorMiddleware } from "../../middlewares/validator.middleware";
import {
    UserCreateSchema,
    userCreateSchema,
} from "./schemas/userCreate.schema";
@Controller("/user")
@Injectable()
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get("/")
    index() {
        return this.userService.index();
    }

    @Get("/:id")
    show(@Params("id") id: string) {
        return this.userService.show(id);
    }

    @ValidatorMiddleware(userCreateSchema)
    @Post("/")
    create(@Body() userCreateSchema: UserCreateSchema) {
        return this.userService.create(userCreateSchema);
    }
}
