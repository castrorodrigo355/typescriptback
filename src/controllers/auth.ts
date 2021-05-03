import { Request, Response } from 'express';
import AuthService from '../service/auth';

class Auth {

    public authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public async registerUser(req: Request, res: Response): Promise<void> {
        const body = req.body;
        const { ok, response } = await this.authService.registerUser(body);
        if (!ok) {
            return res.status(500).json({ Error: response });
        }
        res.status(200).json({ data: response });
    };

    public async loginUser(req: Request, res: Response): Promise<void> {
        const body = req.body;
        const { ok, response } = await this.authService.loginUser(body);
        if (!ok) {
            return res.status(500).json({ Error: response });
        }
        res.status(200).json({ data: response });
    };

    public async revalidateToken(req: Request, res: Response): Promise<void> {
        // const id = req.id;
        // const name = req.name;
        // const token = await generateJWT(id, name);
        // res.json({
        //     ok: true,
        //     id,
        //     name,
        //     token,
        // });
    };
}

export default Auth;