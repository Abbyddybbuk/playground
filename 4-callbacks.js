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