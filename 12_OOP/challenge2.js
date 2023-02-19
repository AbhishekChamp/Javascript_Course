/*
1. Re-create challenge 1, but this time using an ES6 class
2. Add a getter called 'speedUS' which returns the current speed in mi/hr (divide by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/hr (but converts it to km/hr before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiemnt the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/hr
*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/hr`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/hr`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
