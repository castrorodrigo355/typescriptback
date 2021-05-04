import { Router } from 'express';
import AuthController from '../controllers/auth';

class AuthRouter {

    public router: Router;
    public authController: AuthController;

    constructor() {
        this.router = Router();
        this.authController = new AuthController();
        this.authConfig();
    }

    public async authConfig() {
        /* CONTROLLER */
        this.router.post('/register', this.authController.registerUser);
        this.router.post('/login', this.authController.loginUser);
        // this.router.get("/renew", this.authController.revalidateToken);
    }

}

export default AuthRouter;