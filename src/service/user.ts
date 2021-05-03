import UserDao from '../dao/user';

class UserService {

    public userDao: UserDao

    constructor() {
        this.userDao = new UserDao()
    }

    getUsers() {
        return this.userDao.getUsers()
    }

    getUserById(id: string) {
        return this.userDao.getUserById(id)
    }

    deleteUser(id: string) {
        return this.userDao.deleteUser(id)
    }

    updateUser(id: string, body: any) {
        return this.userDao.updateUser(id, body)
    }

}

export default UserService;