import {controller} from "../controller";
import {get, post} from "../method";
import {Model, req} from "../req";
import {response} from "../response";
import {request} from "../request";
import {context} from "../context";

class User {

}

interface Response {

}

interface Request {

}

interface Context {
}

interface Demo{
    validate:()=>boolean
}

class ABC implements Model{
    validate: () => boolean;
    parse: () => Model;
}

@controller('/user')
class UserController {

    @post('/login')
    login(@req.body(new ABC()) userName: string, @req.body(new ABC()) passWord: string) {

    }

    @post('/')
    edit(@request req: Request, @response res: Response) {

    }

    @get('/logout')
    logout(@context ctx: Context) {

    }

    @get('/s')
    list(@req.query(new ABC()) pageSize: number, @req.query(new ABC()) pageNumber: number, @req.query(new ABC()) sort: string) {

    }

}