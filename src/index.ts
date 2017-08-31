class Router{

    controllers:Map<string,any> = new Map();

    addController(path:string,controller:Function){

        this.controllers.set(path,controller);

    }

}

export default new Router();