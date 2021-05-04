import { Request, Response } from 'express';
import UserService from "../service/user";

export default class UserController {

    public userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public getUsers = async (req: Request, res: Response): Promise<void> => {
        const { ok, users, status } = await this.userService.getUsers()
        if (!ok) {
            return res.status(status).json({ Error: null });
        }
        res.status(status).json({ data: users })
    }

    public getUserById = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;
        const { ok, user, status } = await this.userService.getUserById(id)
        if (!ok) {
            return res.status(status).json({ Error: user });
        }
        res.status(status).json({ data: user })
    }

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;
        const { ok, user, status } = await this.userService.deleteUser(id)
        if (!ok) {
            return res.status(status).json({ Error: user });
        }
        res.status(status).json({ data: user })
    }

    public updateUser = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id;
        const body = req.body;
        const { ok, user, status } = await this.userService.updateUser(id, body)
        if (!ok) {
            return res.status(status).json({ Error: user });
        }
        res.status(status).json({ data: user })
    }

}
