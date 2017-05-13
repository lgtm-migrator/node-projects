/**
 * Created by Bobby on 13/5/2017.
 */

let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Input does not contain number.');
            }
        }, 1500);
    });
};

asyncAdd('A', 8).then((result) => {
    console.log(`Result = ${result}`);
    return asyncAdd(result, 10);
}).then((res)=>{
    console.log(`Result = ${res}`);
}).catch((err) => {
    console.log(err);
});

// let somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        //resolve('Promise works!');
//        reject('Promise fails!');
//     }, 2500);
// });
//
// somePromise.then((msg)=> {
//     console.log(`Success : ${msg}`);
// }, (errMsg) => {
//     console.log(`Failed : ${errMsg}`);
// });