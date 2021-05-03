import UserDao from '../dao/user';

class UserService {

    public userDao: UserDao

    constructor() {
        this.userDao = new UserDao()
    }

    getUsers() {
        return this.userDao.getUsers()
    }

    getUserById(id: any) {
        return this.userDao.getUserById(id)
    }

    deleteUser(id: any) {
        return this.userDao.deleteUser(id)
    }

    updateUser(id: any, body: any) {
        return this.userDao.updateUser(id, body)
    }

}

export default UserService;