function Vehicle() {
    this.engines = 1;
}
Vehicle.prototype.ignition = function() {
    console.log("turning on my engine");
}
Vehicle.prototype.drive = function() {
    this.ignition();
    console.log("steering and moving forward");
}
function Car() {
    var car = new Vehicle();
    car.wheels = 4;
    var vehDrive = car.drive;
    car.drive = function() {
        vehDrive.call(this);
        console.log("rolling on all", this.wheels, "wheels");
    }
    return car;
}
var myCar = new Car();
myCar.drive();
