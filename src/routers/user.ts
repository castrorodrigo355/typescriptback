import { Router } from 'express';
import UserController from '../controllers/user';

export default class UserRouter {

    public router: Router;
    public userController = new UserController()

    constructor() {
        this.router = Router();
        this.controllersConfig();
    }

    public controllersConfig() {
        this.router.get('/', this.userController.getUsers);
        this.router.get('/:id', this.userController.getUserById);
        this.router.delete("/:id", this.userController.deleteUser);
        this.router.put('/:id', this.userController.updateUser);
    }

}
