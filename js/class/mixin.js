function mixin(sourceObj, targetObj) {
    for (var key in sourceObj) {
        if (! (key in targetObj)) {
            targetObj[key] = sourceObj[key];
        }
    }
    return targetObj;
}
var Vehicle = {
    engines: 1,
    ignition: function() {
        console.log("turning on my engine");
    },
    drive: function() {
        this.ignition();
        console.log("steering and moving forward");
    }
}
var Car = mixin(Vehicle, {
    wheels: 4,
    drive: function() {
        Vehicle.drive.call(this);
        console.log("rolling on all", this.wheels, "wheels");
    },
    ignition: function() {
        console.log("Car ignition");
    }
});
Vehicle.drive();
Car.drive();
console.log(Vehicle);
console.log(Car);

Car.ignition = function() {console.log("AAAAAAAAA");};
Vehicle.drive();
Car.drive();
