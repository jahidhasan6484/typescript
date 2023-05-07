class Person {
    takeNap(): void {
        console.log("I am sleeping 8 hours per day")
    }
}

class StudentClass extends Person {
    takeNap(): void {
        console.log("I am sleeping 10 hours per day")
    }
}

class Developer extends Person {
    takeNap(): void {
        console.log("I am sleeping 5 hours per day")
    }
}

function getNap(parameter: Person) {
    parameter.takeNap()
}

const firstPerson = new Person()
const secondPerson = new StudentClass()
const thirdPerson = new Developer()

// getNap(firstPerson)
// getNap(secondPerson)
// getNap(thirdPerson)

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super()
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
        super()
    }

    getArea(): number {
        return this.height * this.width;
    }
}

function getShapeArea(parameter: Shape) {
    console.log(parameter.getArea())
}


getShapeArea(new Rectangle(3, 9))