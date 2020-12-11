const add = (a, b, callback) => {
    callback(a, b)
}

add(10, 29, (x, y)=> {
    z = x + y
    console.log(`Sum of ${x} and ${y} is ${z}`)
})
