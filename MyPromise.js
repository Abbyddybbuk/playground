const voterList = [
    {
        name: 'Abhijeet',
        age: 36
    }, {
        name: 'Max',
        age: 17
    }, {
        name: 'Peter',
        age: 12
    }, {
        name: 'Henry',
        age: 40
    }

]

voterList.forEach((voter) => {
    const checkEachVoter = new Promise((resolve, reject) => {
        if (voter.age > 17) {
            let result = `${voter.name} is eligible to vote since his age is ${voter.age}`
            resolve(result)
        } else {
            let result = `${voter.name} is NOT eligible to vote since his age is ${voter.age}`
            reject(result)
        }
    })


    checkEachVoter.then((conclusion) => {
        console.log(conclusion)
    }).catch((conclusion) => {
        console.log(conclusion)
    })
})