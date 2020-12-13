const add = (a, b)=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (a < 0 || b < 0)
               reject('Numbers cannot be negative')
            resolve(a + b)
        }, 1000)
    })
}

const doWork = async () => {
    const sum = await add(1, 999)
    const sum2 = await add(2, sum)
    const sum3 = await add(-9, sum2)
    return sum3
}

doWork().then((result)=>{
   console.log('Final Bill Amount: ' + result)
}).catch((error)=>{
    console.log('Error! ' + error)
})