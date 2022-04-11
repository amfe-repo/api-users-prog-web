import { Request, Response } from "express";
import { Model } from "sequelize/types";
import UserModel from "./userModel";

async function getUsers(req: Request, res: Response): Promise<void>
{
    const users: Model<any, any>[] = await UserModel.findAll();

    res.json(users);
}

async function getUser(req: Request, res: Response): Promise<void>
{
    const { id } = req.params;

    const user: Model<any, any> | null = await UserModel.findByPk(id);

    if(user)
    {
        res.json(user);
    }
    else
    {
        res.status(404).json(
            {
                msg:'Not exist ' + id
            });
    }

}

async function addUser(req: Request, res: Response): Promise<void>
{
    const { body } = req;

    try 
    {
        const user: Model<any, any> = UserModel.build(body);
        await user.save(body);

        res.json(
            {
                msg: 'User added',
                body: body
            });
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json(
            {
                msg: 'Server error'
            })
    }

}

function updateUser(req: Request, res: Response): void
{
    const { id } = req.params;

    res.json(
        {
            msg: 'updateUser request [not implemented]',
            id_user: id
        });
}

function deleteUser(req: Request, res: Response): void
{
    const { id } = req.params;

    res.json(
        {
            msg: 'deleteUser request [not implemented]',
            id_user: id
        });
}

export {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}