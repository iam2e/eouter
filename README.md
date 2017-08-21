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
class UserController {

    @post('/login')
    @res(200)
    @res(401)
    async login(@req.body(String) userName: string, @req.body(String) passWord: string) {

    }

    @get('/:uid')
    @res(200, User)
    @res(401)
    @res(404)
    async getUser(@req.param(String) uid:string) {

    }

    @get('s')
    @res(200,ArrayOf(User))
    @res(401)
    async getUsers(@req.query(Number) pageSize:number,@req.query(Number) pageNumber:number){

    }
}
```