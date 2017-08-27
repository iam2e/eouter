/***
 * METHOD
 * @returns {MethodDecorator}
 */
export function method(type: string, path?: string): MethodDecorator {
    return function () {

    }
}


export const get = (path?: string) => method('GET', path);

export const post = (path?: string) => method('POST', path);

export const del = (path?: string) => method('DELETE', path);

export const put = (path?: string) => method('PUT', path);