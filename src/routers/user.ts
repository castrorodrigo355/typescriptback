import { Router } from 'express';
import UserController from '../controllers/user';

class UserRouter {

    public router: Router;
    public userController: UserController;

    constructor() {
        this.router = Router();
        this.controllersConfig();
    }

    controllersConfig(): void {
        /* CONTROLLER */
        this.userController = new UserController()
        this.router.get('/', this.userController.getUsers);
        this.router.get('/:id', this.userController.getUserById);
        this.router.delete("/:id", this.userController.deleteUser);
        this.router.put('/:id', this.userController.updateUser);
    }

}

export default UserRouter;