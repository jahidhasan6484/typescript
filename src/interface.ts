interface User {
    name: string,
    contactNumber: string,
    age: number
}

const jahidHasan: User = {
    name: "Jahid Hasan",
    contactNumber: "01774266484",
    age: 23
}

interface newUser extends User {
    isVerified: boolean
}

const rahad: newUser = {
    name: "Rahad",
    contactNumber: "0100000000",
    age: 23,
    isVerified: false
}

// Type Alias and Interface use in a function
type sumType = (a: number, b: number) => number;
interface sumInterface {
    (
        a: number,
        b: number
    ): number
}

const addUsingAlias: sumType = (x, y) => {
    return x + y;
}

const addUsingInterface: sumInterface = (x, y) => {
    return x + y;
}

// Array
type idsType = number[];
interface idsInterface {
    [index: number]: number
}

const idsUsingType: idsType = [12482, 12340, 12730]
const idsUsingInterface: idsInterface = [12482, 12340, 12730]