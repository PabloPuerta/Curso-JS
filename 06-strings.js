// Strings
let miNombre = "Pablo"
let saludo = "Hola"

// Concatenación
console.log (saludo + " " + miNombre)
let saludoCompleto = saludo + " " + miNombre
console.log(saludoCompleto)
console.log(typeof saludoCompleto)

// Longitud
console.log(saludo.length)

// Acceso a caracteres
console.log(saludoCompleto[0])
console.log(saludoCompleto[6])

// Métodos comunes
console.log(saludoCompleto.toUpperCase())
console.log(saludoCompleto.toLowerCase())
console.log(saludoCompleto.indexOf("Pablo"))
console.log(saludoCompleto.includes("Pablo"))
console.log(saludoCompleto.slice(0, 5))
console.log(saludoCompleto.replace("Pablo", "Jose"))

// Template literals (plantillas literales)
let mensaje = `Hola, este es mi
curso de JavaScript`

console.log(mensaje)

let nombre = "Pablo"
console.log(`Hola, mi nombre es ${nombre}`)     // Esto es una variable interpolable y se utiliza el acento invertido

let email = "Pablopuertacasado@gmail.com"
console.log(`Hola, ${nombre}, tu email es ${email}`)    // Interpolar dos variables
