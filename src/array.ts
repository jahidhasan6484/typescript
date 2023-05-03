// Reference Data Type

// 1. Objects
// 2. Functions
// 3. Collections
// 4. Arrays
// 5. Dates
// 6. Other types of objects

// Array
//An array is a special type of data type which can store multiple values of different data types sequentially using a special syntax.
const topic: string[] = ["ReactJS", "NextJS"]
const ids: number[] = [482, 340, 730]

// Tuples (Special type of array)
//TypeScript introduced a new data type called Tuple. Tuple can contain two values of different data types.
const employee: [number, string] = [1, "Jahid Hasan"]
let user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable