// Abstraction with interface

// interface VehicleInterface {
//     start(): void,
//     stop(): void,
//     move(): void
// }

// class Vehicle implements VehicleInterface {
//     constructor(public name: string, public model: string, public runOnCharge: boolean) {

//     }

//     start(): void {
//         console.log(`Start the engine of ${this.name} ${this.model} with ${this.runOnCharge ? "electric charge" : "fuel"}`)
//     }
//     stop(): void {
//         console.log(`Stop the engine ${this.model}`)
//     }
//     move(): void {
//         console.log("My car start moving")
//     }
//     brake(): void {
//         console.log("My car is on hold")
//     }
// }

// const myCar = new Vehicle("Tesla", "X4", true)

// myCar.start()



abstract class Vehicle {
    constructor(public name: string, public model: string, public runOnCharge: boolean) {

    }

    abstract start(): void
    abstract stop(): void
    move(): void {
        console.log("My car start moving")
    }
    brake(): void {
        console.log("My car is on hold")
    }
}

class myCar extends Vehicle {
    start(): void {
        console.log(`Start the engine of ${this.name} ${this.model} with ${this.runOnCharge ? "electric charge" : "fuel"}`)
    }
    stop(): void {
        console.log(`Stop the engine ${this.model}`)
    }
}



