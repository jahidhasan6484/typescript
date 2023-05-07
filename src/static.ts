class Counter {
    static count = 10;

    static increment(): number {
        return Counter.count += 1;
    }

    static decrement(): number {
        return Counter.count -= 1;
    }
}


console.log(Counter.increment())
console.log(Counter.decrement())

console.log(Counter.increment())
console.log(Counter.decrement())