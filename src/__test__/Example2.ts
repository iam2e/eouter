import {controller} from "../controller";
import {post} from "../method";
import {body, path, query, req} from "../req";
import {loadController} from "../index";

@controller('/api')
class Api{

}

@controller('/user')
class UserController extends Api{

    @post('/login')
    login(@body(String) userName: string, @body(String) userPass: string, @query(String) token:string) {

    }

}

loadController(UserController);
