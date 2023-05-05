type PcConfig = {
    motherboard: string,
    processor: string,
    total: number,
    hasCooler: boolean,
    monitorModel?: string
}

const SojibPC: PcConfig = {
    motherboard: "Tomahok 5540",
    processor: "intel core i 5",
    total: 23500,
    hasCooler: true,
    monitorModel: "Walton 24"
}

const LokPC: PcConfig = {
    motherboard: "Foxcon 990",
    processor: "intel core i 5",
    total: 12000,
    hasCooler: true,
}

type Action = (a: number, b: number) => number;

const calculate = (x: number, y: number, action: Action) => {
    return action(x, y);
}

// console.log(calculate(10, 20, (x, y) => x + y))
// console.log(calculate(10, 20, (x, y) => x - y))