### Eouter

是不是感觉这个单词很丑，很不好看~~ 

eRouter 已经被占用了

easy-router 也被占用了

你让我怎么哭，我特么哭不出来啊，就先用这个吧  eouter ~ 俩单词拼在一起。

怎么读呢？！！！ 一坨！！！好吧，希望各位喜欢

各位，专注于你们的业务Logic吧，路由这种功能，就交给我来吧

#### 未来大概是长这个样子的

```typescript

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
```