// Arrow function

const creatGenericArray = <T>(parameter: T): T[] => {
    return [parameter]
}

const stringArray = creatGenericArray<string>('Bangladesh')

type addressType = {
    name: string,
    address: string
}
const objectArray = creatGenericArray<addressType>({
    name: "Md. Jahid Hasan",
    address: "440"
})


// Using Tuple
const createTupleArray = <X, Y>(parameter1: X, parameter2: Y): [X, Y] => {
    return [parameter1, parameter2];
}

const countries = createTupleArray<string[], boolean>(['Bangladesh, Singapore'], true)


// Spread Operator
// const studentId: string = "191-15-12482";

// type mySelftType = {
//     name: string,
//     university: string
// }
// const spreadFunction = (parameter: mySelftType) => {
//     return { ...parameter, studentId }
// }

// const spreadResult = spreadFunction({
//     name: "Md. Jahid Hasan",
//     university: "Daffodil International University"
// })

// Or

const studentId: string = "191-15-12482";

const spreadFunction = <T>(parameter: T) => {
    return { ...parameter, studentId }
}

const spreadResult = spreadFunction({
    name: "Md. Jahid Hasan",
    university: "Daffodil International University"
})

console.log(spreadResult.university);