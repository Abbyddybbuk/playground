const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(['Abhijeet', 'Ankur', 'Developer'])
        reject('Things did not go as expected')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success! ', result)
}).catch((reject) => {
    console.log('Error!', reject)
})