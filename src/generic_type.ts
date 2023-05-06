// Generic type

type GenericArray<T> = Array<T>

const roolNumbers: GenericArray<number> = [1, 2, 3];

type studentDoc = {
    name: string,
    id: number
}
const students: GenericArray<studentDoc> = [
    {
        name: "Jahid Hasan",
        id: 12482
    },
    {

        name: "Sojib",
        id: 993
    }
]

// By using Enum
type GenericTuple<A, B> = [A, B];

const relation: GenericTuple<string, string> = ["Jahid Hasan", "Aishoriya Rai"]

type myBio = {
    fullName: string,
    salary: number
}

const relationAfterJob: GenericTuple<myBio, string> = [
    {
        fullName: "Jahid Hasan",
        salary: 25000
    },
    "Neha Sharma"
]

// By using interface

interface myCV {
    name: string,
    salary: number
}

const relationAfterPromotion : GenericTuple<myCV, string> = [
    {
        name: "Md. Jahid Hasan",
        salary: 30000
    },
    "Fabiya Sreya"
]