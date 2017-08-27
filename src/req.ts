export interface Model {

    validate: () => boolean;


    parse: () => Model;
}

/***
 *
 * @returns {ParameterDecorator}
 */
export function reqData(type: string, model: Model): ParameterDecorator {
    return function () {

    }
}

export const body = (model: Model) => reqData('body', model);

export const query = (model: Model) => reqData('query', model);

export const param = (model: Model) => reqData('param', model);

export const req = {
    body,
    query,
    param
};