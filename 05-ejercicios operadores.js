// 1. Crea una variable para cada operación aritmética

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

// 6.Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos 

// 8. Añade alguna negación 

// 9. Utiliza el operador ternario

// 10. Combina operadores atirméticos, de comparación y lógicos



// SOLUCIONES

// 1. Crea una variable para cada operación aritmética

let suma = 3 + 4
let resta = 4 - 3
let multiplicacion = 3 * 4
let division = 4 / 3
let modulo = 4 % 3
let exponente = 4 ** 3

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(exponente)

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 4
resta +- 4
multiplicacion *= 4
division /= 4
modulo %= 4
exponente **= 4

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(4 == 4)
console.log(4 < 10)
console.log(4 > 1)
console.log(4 != 10)
console.log(4 <= 4)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 == 4)
console.log(20 < 10)
console.log(4 > 10)
console.log(10 != 10)
console.log(20 <= 4)

// 5. Utiliza el operador lógico and

console.log(5 > 4 && 10 > 5)
console.log(10 > 20 && 5 < 1)

// 6.Utiliza el operador lógico or

console.log(10 < 20 || 5 > 2)
console.log(10 > 20 || 5 < 2)

// 7. Combina ambos operadores lógicos 
  
console.log(10 > 20 && 5 < 2 || 10 > 5)
console.log(10 > 20 && 5 < 2 || 10 < 5)

// 8. Añade alguna negación 

console.log(!(10 > 5))
console.log(!(10 == 5))

// 9. Utiliza el operador ternario

let esAdmin = true

esAdmin ? console.log("Bienvenido Administrador") : console.log("El usuario no es Administrador del sitio web")

// 10. Combina operadores atirméticos, de comparación y lógicos

console.log(" ")
console.log(" ")
console.log(" ")

console.log("Obtén una suma total de 80 o 26 con dos números para acceder al sistema")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingresa tu primer número: ", (num1) => {
    rl.question("Ingresa el segundo número: ", (num2) => {
    
    let resultado = parseInt(num1) + parseInt(num2);

    if(resultado == 80 || resultado == 26){
    console.log(`El resultado de ${num1} + ${num2} es ${resultado}, bienvenido`);
    }
    else{
        console.log(`El resultado de ${num1} + ${num2} no es el esperado`)
    }
})
})