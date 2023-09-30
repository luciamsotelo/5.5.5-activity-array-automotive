//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")
class VehicleModel {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}

start()
{
    if (this.fuel > 0) {
        console.log("start the engine");
        return this.start = true
    } else {
        console.log("do not start engine");
        return this.start = false;
    }
}

scheduleService()
{
    if (this.mileage > 30000) {
        console.log("time for maintenance");
        return this.mileage = true
    } else {
        console.log("no service needed");
        return this.mileage = false;
    }
}



//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
