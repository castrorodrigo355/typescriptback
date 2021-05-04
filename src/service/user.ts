import UserDao from '../dao/user';

export default class UserService {

    public userDao: UserDao;

    constructor() {
        this.userDao = new UserDao()
    }

    public getUsers() {
        return this.userDao.getUsers()
    }

    public getUserById(id: string) {
        return this.userDao.getUserById(id)
    }

    public deleteUser(id: string) {
        return this.userDao.deleteUser(id)
    }

    public updateUser(id: string, body: any) {
        return this.userDao.updateUser(id, body)
    }

}