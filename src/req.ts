export const TAG_REQ = Symbol('Req');

export const REQ: Map<string, Map<string, Map<string, Set<number>>>> = new Map();

export function req(method: string, type: Function): ParameterDecorator {
    return function (target: any, key: string, index: number) {
        const tempReq = REQ.get(target.constructor) || new Map();
        if (!tempReq.has(key)) {
            tempReq.set(key, new Map());
        }
        if (!tempReq.get(key).has(method)) {
            tempReq.get(key).set(method, new Set());
        }
        tempReq.get(key).get(method).add(index);
        REQ.set(target.constructor, tempReq);
        target[TAG_REQ] = target.constructor[TAG_REQ] = tempReq;
        target[key][TAG_REQ] = tempReq;
    }
}

export const param = (type: Function) => req('param', type);
export const path = (type: Function) => req('path', type);
export const query = (type: Function) => req('query', type);
export const body = (type: Function) => req('body', type);