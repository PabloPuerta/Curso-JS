// set

// declaración

let mySet = new Set()

// inicialización

mySet = new Set(["Pablo","Elisa","Tina"])
console.log(mySet)

// métodos comunes

// add y delete

mySet.add("Carlos")

console.log(mySet)

mySet.delete("Carlos")

console.log(mySet)

// has

console.log(mySet.has("Pablo"))
console.log(mySet.has("Carlos"))

// size

console.log(mySet.size)

// convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// no admite duplicados

mySet.add("Pablo")
mySet.add("Pablo")
mySet.add("Pablo")
console.log(mySet)

mySet.add("pablo")
console.log(mySet)