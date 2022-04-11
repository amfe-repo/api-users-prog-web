"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
const dbName = process.env.DATABASE_NAME || '';
const dbHost = process.env.DATABASE_HOST || '';
const dbUser = process.env.DATABASE_USER || '';
const dbPass = process.env.DATABASE_PASS || '';
const msSQLDb = new sequelize_1.Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'mssql'
});
exports.default = msSQLDb;
//# sourceMappingURL=connect.js.map