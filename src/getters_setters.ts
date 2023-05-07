class StudentBankAccount {
    constructor(public accountNumber: string, private _ownerName: string, protected _balance: number, public isStudent: boolean) {
    }

    // Getter
    get balance(): number {
        return this._balance;
    }

    // Setter
    set deposite(amount: number) {
        this._balance += amount;
    }
}

const myStudentAccount = new StudentBankAccount("XA54AC990", "Md. Jahid Hasan", 500, true)

myStudentAccount.deposite=30;
console.log(myStudentAccount.balance)