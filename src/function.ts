// Regular Function

function sum(number1: number, number2: number): number {
    return number1 + number2;
}

// console.log(sum(2, 3))

// Arrow Function 

const add = (num1: number, num2: number): number => {
    return num1 + num2;
}

// console.log(add(2, 3))

const numbers: number[] = [1, 2, 3, 4];
numbers.map((num: number) => num * num)

const person: {
    name: string,
    balance: number,
    addBalance(money: number): number
} = {
    name: "Tonmoy",
    balance: 1000,

    addBalance(money: number) {
        this.balance = this.balance + money
        return this.balance;
    }
}

// console.log(person.addBalance(2))
// console.log(person.addBalance(2))

// Spread Operators
const oldFriends: string[] = ["Sojib", "Forhad", "Rahad"]
const newFriends: string[] = ["Nasim", "Mosi", "Hasibur"]

const allFriends: string[] = []
allFriends.push(...oldFriends, ...newFriends)

// console.log("My all friends:", allFriends)

// Rest Parameters
const getTotal = (...numbers: number[]): number => {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

// console.log(getTotal(1, 2, 3))

// Array and Object Destructuring

const studentDoc: {
    fullName: string,
    id: number,
    email: string,
    isGraduate: boolean
} = {
    fullName: "Jahid Hasan",
    id: 12482,
    email: "jahidhasan6484@gmail.com",
    isGraduate: true
}

const { fullName, email, id } = studentDoc;
