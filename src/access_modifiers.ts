// class BankAccount {
//     constructor(public accountNumber: string, private _ownerName: string, private _balance: number) {
//     }

//     checkBalance(): void {
//         console.log(`Your balance is ${this._balance}`)
//     }

//     deposite(amount: number): void {
//         this._balance += amount;
//         console.log(`Deposite of ${amount} is successfull`)
//         console.log(`Your updated balance is ${this._balance}`)
//     }
// }

// const myAccount = new BankAccount("XA54AC990", "Md. Jahid Hasan", 500)
// myAccount.deposite(20)
// myAccount.checkBalance()

// If you want to access secret proprety outside of class but inside of child class, then use protedted instade of private

class BankAccount {
    constructor(public accountNumber: string, private _ownerName: string, protected _balance: number) {
    }

    checkBalance(): void {
        console.log(`Your balance is ${this._balance}`)
    }

    deposite(amount: number): void {
        this._balance += amount;
        console.log(`Deposite of ${amount} is successfull`)
        console.log(`Your updated balance is ${this._balance}`)
    }
}

const myAccount = new BankAccount("XA54AC990", "Md. Jahid Hasan", 500)

class access extends BankAccount {
    deposite(amount: number): void {
        this._balance += amount;
        console.log(`Deposite of ${amount} is successfull`)
        console.log(`Your updated balance is ${this._balance}`)
    }

    // ownerName cann't acces here, because ownerName is private. Private can only access withing class and it's own object
}