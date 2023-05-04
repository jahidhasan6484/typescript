"use strict";
// Regular Function
function sum(number1, number2) {
    return number1 + number2;
}
console.log(sum(2, 3));
// Arrow Function 
const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(2, 3));
const numbers = [1, 2, 3, 4];
numbers.map((num) => num * num);
const person = {
    name: "Tonmoy",
    balance: 1000,
    addBalance(money) {
        this.balance = this.balance + money;
        return this.balance;
    }
};
console.log(person.addBalance(2));
console.log(person.addBalance(2));
