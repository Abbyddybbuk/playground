const { resolve } = require("path")

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve(['Abhijeet', 'Ankur', 'Developer'])
//         reject('Things did not go as expected')
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('Success! ', result)
// }).catch((reject) => {
//     console.log('Error!', reject)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

//Promise Chaining
add(2, 2).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 8)
}).then((sum3) => {
    console.log(sum3)
}).catch((error) => {
    console.log('Error!')
})

