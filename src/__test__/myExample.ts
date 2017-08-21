// function controller(path?: string): ClassDecorator {
//     return function (target: Function) {
//
//     }
// }
//
// function get (path?: string): MethodDecorator {
//     return function () {
//
//     };
// }
//
// function post(path?: string): MethodDecorator {
//     return function () {
//
//     }
// }
//
// const req = {
//     body: function (type: Function): ParameterDecorator {
//         return function () {
//
//         }
//     },
//     query:function(type:Function):ParameterDecorator{
//         return function(){
//
//         }
//     },
//     param:function(type:Function):ParameterDecorator{
//         return function(){
//
//         }
//     }
// };
//
// class User {
//     uid: string;
//     nickName: string;
//     avatar: string;
// }
//
// const res = function (code: number, model?: Function, contentType: string = "application/json"): MethodDecorator {
//     return function () {
//
//     }
// };
//
// function ArrayOf(type:Function):Function{
//     return ()=>{}
// }
//
// var COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
// var DEFAULT_PARAMS = /=[^,]+/mg;
// var FAT_ARROWS = /=>.*$/mg;
//
// function getParameterNames(fn:Function) {
//     var code = fn.toString()
//         .replace(COMMENTS, '')
//         .replace(FAT_ARROWS, '')
//         .replace(DEFAULT_PARAMS, '');
//
//     var result = code.slice(code.indexOf('(') + 1, code.indexOf(')'))
//         .match(/([^\s,]+)/g);
//
//     return result === null
//         ? []
//         : result;
// }
//
// @controller('/user')
// class UserController {
//
//     @post('/login')
//     @res(200)
//     @res(401)
//     async login(@req.body(String) userName: string, @req.body(String) passWord: string) {
//
//     }
//
//     @get('/:uid')
//     @res(200, User)
//     @res(401)
//     @res(404)
//     async getUser(@req.param(String) uid:string) {
//
//     }
//
//     @get('s')
//     @res(200,ArrayOf(User))
//     @res(401)
//     async getUsers(@req.query(Number) pageSize:number,@req.query(Number) pageNumber:number){
//
//     }
// }
//
//
//
// console.log(getParameterNames(UserController.prototype.getUsers));