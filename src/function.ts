// Regular Function

function sum(number1: number, number2: number): number {
    return number1 + number2;
}

console.log(sum(2, 3))

// Arrow Function 

const add = (num1: number, num2: number): number => {
    return num1 + num2;
}

console.log(add(2, 3))

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

console.log(person.addBalance(2))
console.log(person.addBalance(2))