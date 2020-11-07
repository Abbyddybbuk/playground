// Shorthand syntax
 const name = 'Abhijeet'
 const userAge = 35

 const user = {
     name,//Shorthand syntax where the poperty name is taken from variable declared above
     age: userAge,
     location: 'Bangalore'
 }

 console.log(user)

 // Object Destructuring
 const product = {
     label: 'Wings of Fire',
     price: 400,
     stock: 10,
     salePrice: undefined,
     rating: 4.5
 }

// If you want to choose the name as is then use the variable name as product object itself
// else you change the variable name as shown below.
// You can also use the property which is not yet defined like rating and here you can default the value of variable
// If the property is later introduced in the product then value will be used from product object itself

 const {label: productLabel, price, rating=5} = product

 console.log(productLabel, price, rating)


 //Destructuring the function
 const transaction = (type, {label, price, rating}) => {
     console.log(type, label, price, rating)
 }

 transaction('Order', product)
