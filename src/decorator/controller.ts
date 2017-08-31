import router from '../index'

const TAG_CONTROLLER = Symbol('Controller');

export function controller(path?: string): ClassDecorator {
    return function (target: any) {

        if (!path) {
            path = target.name;
        }

        const parent = Object.getPrototypeOf(target);

        if (parent[TAG_CONTROLLER]) {
            path = parent[TAG_CONTROLLER] + path;
        }

        router.addController(path || '', target);

        target[TAG_CONTROLLER] = path;

    }
}