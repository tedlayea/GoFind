angular
.module("app",["ngResource"])
.controller("mainController",["Imagefactory",mainControllerFunction])
.factory("Imagefactory",["$resource", FactoryFunction])

function mainControllerFunction(Imagefactory){
    this.post = new Imagefactory();
    this.sendFunction = function(){
    console.log("post clicked");
    this.post.$save()
    location.reload()
}

}

function FactoryFunction($resource){
    return $resource(" https://8n78hbwks0.execute-api.us-west-2.amazonaws.com/dev/", {}, {
        update: { method: "PUT" }
    })
}
