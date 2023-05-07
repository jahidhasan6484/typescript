// class Animal {
//     name: string;
//     age: number;
//     sound: string;
//     hasTail: boolean
//     constructor(name: string, age: number, sound: string, tail: boolean) {
//         this.name = name,
//         this.age = age,
//         this.sound = sound,
//         this.hasTail = tail
//     }

//     getName() {
//         console.log(this.name)
//     }
//     getAge() {
//         console.log(this.age)
//     }
//     getSound() {
//         console.log(this.sound)
//     }
//     checkTail() {
//         console.log(this.hasTail ? "It has a tail" : "Opps, tail doesn't found")
//     }
// }

// const fox = new Animal("Old Clever Fox", 52, "Hukka Huya", false)

// fox.checkTail()


// Or
class Animal {
    constructor(public name: string, public age: number, public sound: string, public hasTail: boolean) {
    }

    getName() {
        console.log(this.name)
    }
    getAge() {
        console.log(this.age)
    }
    getSound() {
        console.log(this.sound)
    }
    checkTail() {
        console.log(this.hasTail ? "It has a tail" : "Opps, tail doesn't found")
    }
}

const fox = new Animal("Old Clever Fox", 52, "Hukka Huya", false)

fox.getName()