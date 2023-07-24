// Create a promise
const promise = new Promise((resolve, reject) => {
    // Do something with the async
    setTimeout(() => {
        console.log('Async Task completed');
        resolve()
    }, 1000)
});

const getUser = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({name: 'Joshua', age: 30});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000)
});

getUser
    .then((user) => console.log(user))
    .catch((error) => console.log(error))
    .finally(() => console.log('The Promise has been resolved or rejected'));

console.log('Hello from Global scope')