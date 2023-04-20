import { Table, Model, Column, DataType } from "sequelize-typescript";
import { User } from "../schemas/user.schema";

@Table({ tableName: "users" })
export class UserEntity extends Model implements Omit<User, "id"> {
    @Column({
        type: DataType.STRING(100),
        unique: true,
        allowNull: false,
    })
    nombre: string;

    @Column({ type: DataType.STRING(200), unique: true, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING(100), allowNull: false })
    password: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    edad: number;
}
