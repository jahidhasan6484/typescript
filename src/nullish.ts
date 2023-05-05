// Nullish Coalesnace Operator
// On;y be applicable for null and undefined value

const isVerify = null;
const userStatus = isVerify ?? "Guest"

// console.log(userStatus)

type Human  = {
    name: string,
    holdingNumber: string,
    haveNID: boolean,
    contactNumber?: string
}

const myDetails: Human = {
    name: "Md. Jahid Hasan",
    holdingNumber: "440 Debinagar",
    haveNID: true
}

console.log(myDetails.contactNumber ?? "No NID card")