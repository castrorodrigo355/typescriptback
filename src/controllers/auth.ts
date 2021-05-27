import { Request, Response } from 'express';
import AuthService from '../service/auth';

export default class Auth {

    public authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public registerUser = async (req: Request, res: Response): Promise<void> => {
        const body = req.body;
        const { ok, status, response } = await this.authService.registerUser(body);
        if (!ok) {
            return res.status(status).json({ Error: response });
        }
        res.status(status).json({ data: response });
    }

    public loginUser = async (req: Request, res: Response): Promise<void> => {
        const body = req.body;
        const { ok, status, response } = await this.authService.loginUser(body);
        if (!ok) {
            return res.status(status).json({ Error: response });
        }
        res.status(status).json({ data: response });
    }

    public async revalidateToken(): Promise<void> {
        // const id = req.id;
        // const name = req.name;
        // const token = await generateJWT(id, name);
        // res.json({
        //     ok: true,
        //     id,
        //     name,
        //     token,
        // });
    }
}