export function args(type: string, model: Function): ParameterDecorator {
    return function () {
    }
}

export const param = (model: Function) => args('param', model);
export const query = (model: Function) => args('param', model);
export const body = (model: Function) => args('param', model);

const request: ParameterDecorator = function () {

};

const response: ParameterDecorator = function () {

};

const context: ParameterDecorator = function () {

};

export const req = {
    param,
    query,
    body,
    request,
    response,
    context
};