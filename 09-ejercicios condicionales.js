// 1. Imprime por consola tu nombre si una variable toma su valor

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con uno establecido

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// 4. Verifica si un persona puede o no votar (mayoría de edad) e indica cuántos años le faltan para poder

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7


// SOLUCIONES 


// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Pablo"

let condicion = "Pablo"

if (nombre == condicion) {
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con uno establecido

let usuario = "Pablo"
let pass = "1234"

if (usuario == "Pablo" && pass == "1234") {
    console.log("Bienvenido" + " " + usuario)
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 10

if (numero > 0) {
    console.log("El número es positivo")
} else if (numero < 0) {
    console.log("El número es negativo")
} else if (numero == 0) {
    console.log("El número es cero")
}

// 4. Verifica si un persona puede o no votar (mayoría de edad) e indica cuántos años le faltan para poder

let edad = 14
const mayor = 18
let diferencia = (mayor - edad)

if (edad < 18) {
    console.log("El usuario es menor de edad, le quedan" + " " + diferencia + " años para poder votar.")
} else if (edad >= 18) {
    console.log("El usuario es mayor de edad, puede votar.")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

let edadUsuario = 30

edadUsuario < 18 ? console.log("menor") : console.log("adulto");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "marzo"

switch (mes) {
    case "enero":
        console.log("Estamos en Enero")
        break
    case "febrero":
        console.log("Estamos en Febrero")
        break
    case "marzo":
        console.log("Estamos en Marzo")
        break
    case "abril":
        console.log("Estamos en Abril")
        break
    case "mayo":
        console.log("Estamos en Mayo")
        break
    case "junio":
        console.log("Estamos en Junio")
        break
    case "julio":
        console.log("Estamos en Julio")
        break
    case "agosto":
        console.log("Estamos en Agosto")
        break
    case "septiembre":
        console.log("Estamos en Septiembre")
        break
    case "octubre":
        console.log("Estamos en Octubre")
        break
    case "noviembre":
        console.log("Estamos en Noviembre")
        break
    case "diciembre":
        console.log("Estamos en Diciembre")
        break  
} 
