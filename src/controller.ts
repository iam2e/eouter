/***
 * 唯一标志
 * @type {symbol}
 */
export const TAG_CONTROLLER = Symbol('Controller');

/***
 * 路由
 * @returns {ClassDecorator}
 */
export function controller(path?: string): ClassDecorator {

    return function (controller: any) {

        path = path || controller.name;

        const parent = Object.getPrototypeOf(controller);

        if (parent[TAG_CONTROLLER]) {
            path = parent[TAG_CONTROLLER] + path;
        }
        controller[TAG_CONTROLLER] = path;

    }

}
