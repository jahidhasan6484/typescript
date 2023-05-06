const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Yo, you get the data";

        if (data) {
            resolve(data)
        } else {
            reject("Failed to fete")
        }
    })
}


const getPromise = async (): Promise<string> => {
    const data = await makePromise();
    return data;
}


interface User {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchUser = async (): Promise<User> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return response.json()
}

const getUser = async (): Promise<void> => {
    const userData = await fetchUser();
    console.log(userData)
}

getUser()