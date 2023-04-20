import { Sequelize } from "sequelize-typescript";
import { enviroments } from "../config/enviroments.config";
import { UserEntity } from "../../services/user/entities/user.entity";

const sequelize = new Sequelize({
    database: enviroments.DB_NAME,
    dialect: "mysql",
    username: enviroments.DB_USER,
    password: enviroments.DB_PASS,
});

sequelize.addModels([UserEntity]);

export async function authenticated() {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.log("No se conectó correctamente", error);
    }
}
