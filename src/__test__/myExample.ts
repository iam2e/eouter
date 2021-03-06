import {controller} from "../decorator/controller";
import {get, post} from "../decorator/method";
import {req} from "../decorator/req";
import {res} from "../decorator/res";
import {description} from "../decorator/description";

import router from '../';

interface Request {
}

interface Response {
}

interface Context {
}

@controller('/api')
class BaseController {

}

class User {

}

function ArrayOf(model: Function): Function {
    return model;
}

@controller('/user')
class UserController extends BaseController {

    @post('/login')
    @res(200)
    @res(401)
    @description('登录')
    login(@req.context context: Context) {

    }

    @get('/:uid')
    @res(200, User)
    @res(401)
    info(@req.param(Number) uid: number) {

    }

    @get('s')
    @res(200, ArrayOf(User))
    @res(401)
    list(@req.query(Number) pageNumber: number, @req.query(Number) pageSize: number, @req.query(String) sort: string) {

    }

    @get('/logout')
    logout(@req.request request: Request, @req.response response: Response) {

    }

}

console.log(router);