type before20 = {
    name: string
}

type before22 = before20 & {
    skills: string[],
}

enum Level {
    intern,
    junior,
    senior
}

type now = before22 & {
    experience:string
    level: number
}

const currentStatus : now = {
    name: "Md. Jahid Hasan",
    skills: ["ReactJS", "ExpressJS", "Python"],
    experience: "4 months",
    level: Level.junior
}

console.log(currentStatus)