

import {TAG_CONTROLLER} from "./controller";
import {TAG_METHOD} from "./method";
import {TAG_REQ} from "./req";

export function loadController(controller:any){

    console.log('controller',controller[TAG_CONTROLLER]);
    console.log('method',controller[TAG_METHOD]);
    console.log('req',controller[TAG_REQ]);
    console.log(controller.prototype.login[TAG_REQ])
}