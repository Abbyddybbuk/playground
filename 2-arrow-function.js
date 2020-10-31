// const square = function (num) {
//     return num * num
// }

// const { ENETDOWN } = require("constants")

const square = (num) => num * num
console.log(square(67))

const event = {
    name: 'Birthday Party',
    guestList: ['Kanupriya', 'Abhijeet', 'Ayaan'],
    // printGuestList: function() {
    //     console.log('Guest List for ' + this.name)

    //     this.guestList.forEach((guest) => {
    //        console.log(guest + ' is attending ' + this.name)
    //     })
    // }
    printGuestList() {//this way we are defining above function in es6 format
        console.log('Guest List for ' + this.name)

        this.guestList.forEach((guest) => {
           console.log(guest + ' is attending ' + this.name)//Here this.name is accessible because it is taking reference of this from parent function printGuestList()
        })
    }    
}

event.printGuestList()