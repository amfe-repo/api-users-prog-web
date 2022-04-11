import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const dbName: string = process.env.DATABASE_NAME || '';
const dbHost: string = process.env.DATABASE_HOST || '';
const dbUser: string = process.env.DATABASE_USER || '';
const dbPass: string = process.env.DATABASE_PASS || '';


const msSQLDb = new Sequelize(dbName, dbUser, dbPass, 
    {
        host: dbHost,
        dialect: 'mssql'
    });

export default msSQLDb;