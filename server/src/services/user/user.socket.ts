import socket from "socket.io";
import { UserEntity } from "./entities/user.entity";
import { zodValidator } from "../../utils/zodValidator.util";
import {
    UserCreateSchema,
    userCreateSchema,
} from "./schemas/userCreate.schema";

export class UserSocket {
    constructor(
        public readonly socket: socket.Socket,
        public readonly io: socket.Server
    ) {
        this.socket = socket;
        this.io = io;
        this.onCreate();
        this.emitIndex();
    }

    async emitIndex() {
        const users = await UserEntity.findAll();
        this.io.emit("user-index-server", users);
    }
    onCreate() {
        this.socket.on("user-create-client", async (data: UserCreateSchema) => {
            const datos = await zodValidator(userCreateSchema, data);
            if (datos.success) {
                const newUser = new UserEntity(datos.data);
                await newUser.save();
                await this.emitIndex();
                return;
            }
            this.onError("user-create-error-client", datos);
        });
    }

    onError(message: string, error: any) {
        this.socket.emit(message, error);
    }
}
