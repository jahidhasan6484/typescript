const arrayOfNumbers: number[] = [1, 2, 3];
const arrayOfString = arrayOfNumbers.map((number) => number.toString)

type Volume = {
    height: string,
    width: string,
    depth: string
}

// Change the data type of key

type Area = {
    [key in keyof Volume]: number
}

// By generic type

type GenericArea<T> = {
    readonly [k in keyof T]: T[k]
}

const river: GenericArea<{ height: number, width: number, depth: number }> = { height: 10, width: 12, depth: 90 }