/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in Km/hr
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the speed to the console
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times to each of them

DATA CAR 1: 'BMW' going at 120 Km/hr
DATA CAR 2: 'Mercedes' going at 95 Km/hr
*/

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

const carOne = new Car("BMW", 120);
const carTwo = new Car("Mercedes", 95);

Car.prototype.accelerate = function () {
    console.log(this.speed + 10);
};

Car.prototype.brake = function () {
    console.log(this.speed - 10);
};

carOne.accelerate();
carOne.brake();
carTwo.accelerate();
carTwo.brake();
