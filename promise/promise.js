function sayHello() {
    return new Promise((resolve, reject) => {
        // const hello = "hello hello";
        resolve("hello~~!!");
        // reject(new Error());
    })
}

async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}

test();

// sayHello()
//     .then((resolveData) => {
//         console.log(resolveData);
//         return resolveData;
//     })
//     .then((resolveData)=> {
//         console.log(resolveData);
//         return resolveData;
//     })
//     .then((resolveData) => {
//         console.log(resolveData);
//     })
//     .catch(error => {
//         console.log(error);
//     });