// Operadores

// Operadores aritméticos

console.log(5 + 10)

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let variable = 2
variable += 2 // Es igual a decir variable  = variable + 2
console.log(variable)

variable -= 2 
variable *= 2
variable /= 2
variable %= 2
variable **= 2

// Operadores de comparación

console.log(a > b) // Mayor que
console.log(a < b) // Menor que
console.log(a >= b) // Mayor o igual
console.log(a <= b) // Menor o igual
console.log(a == b) // Igualdad por valor
console.log(a === b) // Igualdad por identidad (por tipo y valor)
console.log(a != b) // Distinción (a es distinto de b)
console.log(a !== b) // Distinción por identidad (por tipo y valor)


// and (&&)

console.log(5 < 10 && 15 < 20) // El operador and (&&) comprueba que ambas expresiones son verdaderas

// or (||)

console.log(5 < 10 || 15 > 20) // El operador or (||) comprueba que una de las expresiones es verdadera

// not (!)

console.log(!(5 < 10 || 15 > 20)) // Obtiene la negación o resultado contrario a lo esperado

// Operadores ternarios (? :)m

const estaLloviendo = true

estaLloviendo ? console.log("Está lloviendo") : console.log("No está lloviendo")