"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("./userController");
const userRouter = (0, express_1.Router)();
userRouter.get('/', userController_1.getUsers);
userRouter.get('/:id', userController_1.getUser);
userRouter.post('/', userController_1.addUser);
userRouter.put('/:id', userController_1.updateUser);
userRouter.delete('/:id', userController_1.deleteUser);
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map