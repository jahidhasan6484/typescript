// Generic interface

interface Crush<A, B> {
    name: A,
    age: B,
    hasCat: boolean
}

const shreya: Crush<string, number> = {
    name: "Fabiya Lamisha Shreya",
    age: 26,
    hasCat: true
}