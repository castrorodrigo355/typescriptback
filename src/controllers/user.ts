import { Request, Response } from 'express';
import UserService from "../service/user";

class UserController {

    public userService: UserService;

    constructor() {
        this.userService = new UserService()
    }

    public async getUsers(req: Request, res: Response): Promise<void> {
        const { ok, response } = await this.userService.getUsers()
        if (!ok) {
            return res.status(500).json({ Error: response });
        }
        res.status(200).json({ data: response })
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const { ok, response } = await this.userService.getUserById(id)
        if (!ok) {
            return res.status(500).json({ Error: response });
        }
        res.status(200).json({ data: response })
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const { ok, response } = await this.userService.deleteUser(id)
        if (!ok) {
            return res.status(500).json({ Error: response });
        }
        res.status(200).json({ data: response })
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        const body = req.body;
        const { ok, response } = await this.userService.updateUser(id, body)
        if (!ok) {
            return res.status(500).json({ Error: response });
        }
        res.status(200).json({ data: response })
    }

}

export default UserController;