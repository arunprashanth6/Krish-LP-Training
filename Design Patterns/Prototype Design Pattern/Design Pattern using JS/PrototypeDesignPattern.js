var carPrototype = {
    start: function() {
        console.log("Starting");
    },
    stop: function() {
        console.log("Stopping");
    }
};

function Car(doors , wheels ) {
    doors = doors  || 4;
    wheels = wheels || 4;

    function constructorFunction(doors , wheels) {
        this.doors  = doors;
        this.wheels  = wheels;
    };

constructorFunction.prototype = carPrototype 

    var instance = new constructorFunction(doors , wheels);
    return instance;
}

var car1 = Car();
var car2 = Car(6, 4);


car1.start();
car1.stop();
