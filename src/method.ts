/**
 * Created by Z on 2017-05-16.
 */

export const TAG_METHOD = Symbol('Method');

export interface IMethod {
    key: string;
    handle: Function;
}


/**
 * 说一个坑爹的事儿:
 *  如果是类方法注解,
 *  typescript是通过prototype实现的,
 *  btw,
 *  class User extends BaseController {
 *      @get('/')
 *      index(){
 *
 *      }
 *  }
 *
 *  会造成父级 Controller 注解污染
 */

/**
 * 防止注解污染
 * @type {Map<any, any>}
 */
const methods: Map<Function, Map<string, Map<string, string>>> = new Map();

/**
 * Method
 * @param method
 * @param path
 * @returns {(target:Object, key:string)=>undefined}
 */
export function method(method?: string, path?: string): MethodDecorator {
    return function (target: any, key: string) {
        const tempMethod = methods.get(target.constructor) || new Map();
        if (!tempMethod.has(path)) {
            tempMethod.set(path, new Map());
        }
        tempMethod.get(path).set(method, key);
        (target[TAG_METHOD] = target.constructor[TAG_METHOD] = tempMethod)
            && methods.set(target.constructor, tempMethod);
    }
}

export const get = (path?: string) => method('get', path);
export const put = (path?: string) => method('put', path);
export const del = (path?: string) => method('delete', path);
export const post = (path?: string) => method('post', path);
