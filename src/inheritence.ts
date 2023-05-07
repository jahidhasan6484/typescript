class Common {
    constructor(public name: string, public age: number) {
    }

    sleepingHourCount(hours: number) {
        console.log(`${this.name} sleep for ${hours} hours`)
    }
}

class Student extends Common {
    constructor(public name: string, public age: number, public id: number, public isRegular: boolean) {
        super(name, age)
    }

    checkActivity() {
        console.log(this.isRegular ? `${this.name} is a regular student` : `${this.name} is not a regular student`)
    }
}

class Teacher extends Common {
    constructor(public name: string, public age: number, public institution: string) {
        super(name, age)
    }

    takeClasses(classCount: number) {
        console.log(`${this.name} take ${classCount} classes`)
    }

    practice() {
        console.log(`Mr. ${this.name} is practice in ${this.institution}`)
    }
}

const student = new Student("Md. Jahid Hasan", 23, 12482, true)
const teacher = new Teacher("Khairul Islam", 32, "Daffodil International University")
student.sleepingHourCount(9)
teacher.practice()
teacher.takeClasses(3)