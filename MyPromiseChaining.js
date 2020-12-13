const multiply = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

multiply(2).then((res) => {
    console.log(res)
    return multiply(res)
}).then((res2) => {
    console.log(res2)
    return multiply(res2)
}).then((res3) => {
    console.log(res3)
    return multiply(res3)
}).then((res4) => {
    console.log(res4)
}).catch((error) => {
    console.log(error)
})