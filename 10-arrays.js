// array 

// declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// inicialización

myArray = [1]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1,2,3,4]
myArray2 = new Array(1,2,3,4)


console.log(myArray)
console.log(myArray2)

myArray = ["Pablo", "Elisa", "Tina"]
myArray2 = new Array("Pablo", "Elisa", "Tina")

console.log(myArray)
console.log(myArray2)

myArray = ["Pablo", "Elisa", "Tina", 50, true]
myArray2 = new Array("Pablo", "Elisa", "Tina", 50, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array (3)
myArray2[0] = "Pablo"
myArray2[1] = "Elisa"
myArray2[2] = "Tina"

console.log(myArray2)

// métodos comunes

myArray = []

// push y pop

    // push añade elementos al final del array
myArray.push("Pablo") 
myArray.push("Elisa")
myArray.push("Tina")

console.log(myArray)

    // pop elimina el ultimo elemento del array y lo devuelve

myArray.pop(myArray)
console.log(myArray)

// shift y unshift

    // shift elimina el primer elemento del array y lo devuelve

myArray.shift(myArray)
console.log(myArray)

    // unshift agrega desde el principio elementos al array

myArray.unshift("Tina")
console.log(myArray)

// lenght

    // devuelve la longitud del array

console.log(myArray.length)

// clear 

myArray = []
console.log(myArray)

// slice

myArray.push("Pablo", "Elisa", "Tina")

myArray = myArray.slice(0,2)

console.log(myArray)

// splice

myArray.splice(0, 1, "Carlos")
console.log(myArray)