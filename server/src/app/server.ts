import express from "express";
import http from "http";
import socket from "socket.io";
import cors from "cors";
import { attachControllers } from "@decorators/express";
import { UserController } from "../services/user/user.controller";
import { authenticated } from "./config/db.config";
import { UserSocket } from "../services/user/user.socket";
export class App {
    private readonly app = express();
    private readonly server = new http.Server(this.app);
    private readonly io = new socket.Server(this.server);

    constructor() {
        this.middlewares();
        this.routes();
        this.webSockets();
    }
    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use("/api/v1", this.routes());
        authenticated();
    }
    private routes() {
        const apiRouter = express.Router();
        attachControllers(apiRouter, [UserController]);
        return apiRouter;
    }
    private webSockets() {
        this.io.on("connect", (socket) => {
            new UserSocket(socket, this.io);
        });
    }

    listen() {
        this.server.listen(4000, () => {
            console.log("Corriendo servidor en el puerto 4000");
        });
    }
}
