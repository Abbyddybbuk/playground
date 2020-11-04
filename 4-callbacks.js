const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 2,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Gwalior', (obj) => {
   console.log(obj)
})


const add = (num1, num2, summation) => {
    setTimeout(()=> {
        summation(num1, num2)
    }, 2000)
}

add(34, 56, (a, b)=> {
    const sum = a + b
    console.log(`Sum of two numbers is: ${sum}`)
})