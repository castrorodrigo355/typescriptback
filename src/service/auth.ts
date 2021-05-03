import AuthDao from '../dao/auth';

class AuthService {

    public authDao: AuthDao

    constructor() {
        this.authDao = new AuthDao()
    }

    registerUser(body: any) {
        return this.authDao.registerUser(body)
    }

    loginUser(body: any) {
        return this.authDao.loginUser(body)
    }

}

export default AuthService;