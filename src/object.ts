const student: {
    readonly name: string,
    age: number,
    class: number,
    isRegular?: boolean
} = {
    name: "Tonmoy",
    age: 13,
    class: 7,
    isRegular: false,
}

student.age = 14
console.log(student.name)