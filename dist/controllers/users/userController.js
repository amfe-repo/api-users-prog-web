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
exports.deleteUser = exports.updateUser = exports.addUser = exports.getUser = exports.getUsers = void 0;
const userModel_1 = __importDefault(require("./userModel"));
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield userModel_1.default.findAll();
        res.json(users);
    });
}
exports.getUsers = getUsers;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const user = yield userModel_1.default.findByPk(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({
                msg: 'Not exist ' + id
            });
        }
    });
}
exports.getUser = getUser;
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { body } = req;
        try {
            const user = userModel_1.default.build(body);
            yield user.save(body);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Server error'
            });
        }
        res.json({
            msg: 'addUser request',
            body: body
        });
    });
}
exports.addUser = addUser;
function updateUser(req, res) {
    const { id } = req.params;
    res.json({
        msg: 'updateUser request [not implemented]',
        id_user: id
    });
}
exports.updateUser = updateUser;
function deleteUser(req, res) {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser request [not implemented]',
        id_user: id
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map