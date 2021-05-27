import AuthController from '../controllers/auth';
import { Router } from 'express';
import { configRoutes } from '../config/config';

export default class AuthRouter {

    public router: Router;
    public authController: AuthController;

    constructor() {
        this.router = Router();
        this.authController = new AuthController();
        this.authConfig();
    }

    public async authConfig() {
        this.router.post(configRoutes.SIGNUP_PATH, this.authController.registerUser);
        this.router.post(configRoutes.SIGNIN_PATH, this.authController.loginUser);
        // this.router.get("/renew", this.authController.revalidateToken);
    }

}