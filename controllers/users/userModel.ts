import { DataTypes } from "sequelize";
import msSQLDb from "../../db/connect";

const UserModel = msSQLDb.define('Users',
{
    name:
    {
        type: DataTypes.STRING,
    },
    email:
    {
        type: DataTypes.STRING
    },
    phone:
    {
        type: DataTypes.STRING
    },
    status:
    {
        type: DataTypes.BOOLEAN
    }
});

export default UserModel;