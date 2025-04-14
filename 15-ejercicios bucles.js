// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10


// SOLUCIONES

// 1. Crea un bucle que imprima los números del 1 al 20

let num = 1
do{
    console.log("Imprimo el numero: " + num)
    num ++
}while(num <= 20)


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let posicion
let suma = 0

for( let i = 0; i <= 100; i ++){
    suma += i
}
console.log(suma)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let numero = 0

do{
    if(numero % 2 == 0){
        console.log("Imprimero el numero par: " + numero)
    }
    numero ++
}while(numero <= 50)


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let arrayNombre = []

arrayNombre = ["Pablo", "Elisa", "Tina"]

for(let i = 0; i < arrayNombre.length; i ++){
    console.log(arrayNombre[i])
}


// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadenaTexto = "esto es mi cadena de texto de ejemplo para el ejercicio"
let contador = 0;

for(let i = 0; i < cadenaTexto.length; i++){
    if(cadenaTexto[i] == "a" || cadenaTexto[i] == "e" || cadenaTexto[i] == "i" || cadenaTexto[i] == "o" || cadenaTexto[i] == "u"){
        contador ++
    }
}

console.log("La cadena de texto tiene: " + contador + " vocales.")


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
let multiplicacion = 1

for(let i = 0; i < arrayNumeros.length; i ++){
    multiplicacion *= arrayNumeros[i];
}

console.log(multiplicacion)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

const valor = 5
let resultado

for (let i = 0; i <= 10; i++){
    resultado = valor * i
    console.log(valor + " X " + i + " = " + resultado)
}


// 8. Usa un bucle para invertir una cadena de texto

let cadenaTexto2 = "Pablo"

for(let i = cadenaTexto2.length; i >= 0; i --){
    console.log(cadenaTexto2[i])
}


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let myArrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let myArrayNumerosMayores = []

for(let i = 0; i <= myArrayNumeros.length; i++){
    if(myArrayNumeros[i] > 10 ){
        myArrayNumerosMayores.push(myArrayNumeros[i])
    }
}

console.log(myArrayNumerosMayores)
