// map o diccionario

// declaración

let myMap = new Map()

console.log(myMap)

// inicialización

myMap = new Map([
    ["nombre", "Pablo"],
    ["email", "Pablopuertacasado@gmail.com"],
    ["edad", 30]
])

console.log(myMap)

// métodos comunes

// set

myMap.set("alias","lokotope")

console.log(myMap)

// get

console.log(myMap.get("alias"))
console.log(myMap.get("apellido"))


// has

console.log(myMap.has("alias"))
console.log(myMap.has("apellido"))

// keys y values

console.log(myMap.keys())
console.log(myMap.values())
// delete

myMap.delete("alias")
console.log(myMap)

// clear

myMap.clear()
console.log(myMap)