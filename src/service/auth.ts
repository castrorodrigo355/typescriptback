import AuthDao from '../dao/auth';

interface IResponse {
    ok: boolean;
    status: number;
    response: string;
}

class AuthService {

    public authDao: AuthDao

    constructor() {
        this.authDao = new AuthDao()
    }

    public registerUser(body: any): Promise<IResponse> {
        return this.authDao.registerUser(body)
    }

    public loginUser(body: any): Promise<IResponse> {
        return this.authDao.loginUser(body)
    }

}

export default AuthService;