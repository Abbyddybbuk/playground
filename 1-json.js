const fs = require('fs')
const book = {
    title: 'Wings of fire',
    author: 'APJ Abdul Kalam'
}

// // JSON Stringify converts object to JSON
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// //JSON parse converts JSON to Object
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)


// fs.writeFileSync('1-json.json', bookJSON)

// //Data Buffer returns some byte value; convert it to toString()
// const dataBuffer=fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())

// const data = dataBuffer.toString()
// const dataParsed = JSON.parse(data)
// console.log(dataParsed.author)

const myDetail=fs.readFileSync('1-json.json')
const myDetailJSON = myDetail.toString()
let myDetailObject = JSON.parse(myDetailJSON)
myDetailObject.name="Ankur"
myDetailObject.age=25

const newDetailJSON = JSON.stringify(myDetailObject)
fs.writeFileSync('1-json.json', newDetailJSON)