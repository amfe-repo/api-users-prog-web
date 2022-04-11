"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("../controllers/users/userRoutes"));
const connect_1 = __importDefault(require("../db/connect"));
class Server {
    constructor() {
        this.endPoints = {
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.middlewares();
        this.connectDb();
        this.routes();
    }
    connectDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connect_1.default.authenticate();
                console.log('DB ON');
            }
            catch (error) {
                throw new Error(`${error}`);
            }
        });
    }
    routes() {
        this.app.use(this.endPoints.users, userRoutes_1.default);
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server init on port ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map