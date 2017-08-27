

import {TAG_CONTROLLER} from "./controller";
import {TAG_METHOD} from "./method";
import {TAG_REQ} from "./req";
import {getParameterNames} from "./utils";

export function loadController(controller:any){

    console.log('controller',controller[TAG_CONTROLLER]);
    console.log('method',controller[TAG_METHOD]);
    console.log('req',controller[TAG_REQ]);
    const p = controller.prototype[TAG_REQ].get('login');
    console.log('whats',p);
    const query = [...(p.get('query')||new Set())];
    const body = [...(p.get('body')||new Set())];
    const param = [...(p.get('param')||new Set())];
    const paramNames = getParameterNames(controller.prototype.login);
    const req = {query:{},body:{},path:{},param:{}}
    console.log("query",query);
    console.log("body",body);
    console.log("param",param);
    console.log("paramNames",paramNames);
    query.forEach((item)=>{
        req.query[paramNames[item]] = 0;
    });
    body.forEach((item)=>{
        req.body[paramNames[item]] = 0;
    });
    param.forEach((item)=>{
        req.param[paramNames[item]] = 0;
    });

    console.log('req',req);
}