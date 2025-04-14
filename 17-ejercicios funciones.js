// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado


// SOLUCIONES


// 1. Crea una función que reciba dos números y devuelva su suma

function funcionSuma(a,b){
    return a + b 
}

console.log(funcionSuma(4,5))


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

myArrayNumeros = [1,2,3,4,5,9,8,7,6,10,20]
let numMayor = 0

function returnMax(myArrayNumeros){
    for(let i = 0; i < myArrayNumeros.length; i++){
        if(myArrayNumeros[i] > numMayor){
            numMayor = myArrayNumeros[i]
        }
    }
    return numMayor
}

console.log(returnMax(myArrayNumeros))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let numVocales = 0

function returnNumVocales(String){
  for(let i = 0; i < String.length; i++){
    if(String[i] == "a" || String[i] == "e" || String[i] == "i" || String[i] == "o" || String[i] == "u"){
        numVocales ++
    }
  }
  return numVocales
}

console.log(returnNumVocales("Pablo"))


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function convertMayus(array) {
    let newArray = [];
    array.forEach(item => {
        newArray.push(item.toUpperCase());
    });
    return newArray;
}

let myArrayString = ["Pablo", "Elisa", "Tina"];
let resultado = convertMayus(myArrayString);
console.log(resultado); // ["PABLO", "ELISA", "TINA"]


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numPrimo(numero) {
    if (numero <= 1) return false; // los números menores o iguales a 1 no son primos
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // si es divisible por cualquier número entre 2 y su raíz cuadrada, no es primo
        }
    }
    return true; // si no encontró divisores, es primo
}

console.log(numPrimo(10));


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(array1, array2){
    let arrayConjunto = []

    for(let i = 0; i < array1.length; i ++){
        if(array2.includes(array1[i])){
           arrayConjunto.push(array1[i])
        }
    }
    return arrayConjunto
}

array1 = ["Pablo", "Elisa","Tina"]
array2 = ["Jose", "Pilar", "Natalia", "Pablo"]

console.log(elementosComunes(array1, array2))


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(arrayNumeros){  
    let sumaNumerosPares = 0 
    for(let i = 0; i < arrayNumeros.length; i++){
        if(arrayNumeros[i] % 2 == 0){
            sumaNumerosPares += arrayNumeros[i]
        }
    }
    return sumaNumerosPares
}

let arrayNumeros7 = [1,2,3,4,5,6,7,8,9]
console.log(sumaPares(arrayNumeros7))


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function arrayCuadrado(arrayNumBase){

    let arrayNumCuadrados = []

    for(let i = 0; i < arrayNumBase.length; i++){
        arrayNumCuadrados.push(arrayNumBase[i] * arrayNumBase[i])
    }

    return arrayNumCuadrados
}


let myArray = [1,2,3]
console.log(arrayCuadrado(myArray))


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirPalabras(cadena) {
    return cadena.split(" ").reverse().join(" ");
}

/**
 * ¿Qué hace Split()?
 *  Convierte una cadena de texto en un array de elementos, usando como referencia un separador
 *      cadena.split(separador)
 * 
 * ¿Qué hace Reverse()?
 *  Invierte el orden de los elementos de un array IMPORTANTE SOLO FUNCIONA CON ARRAYS
 *      let array = ["Hola", "mundo"]
 *      array.reverse()
 *      console.log(array)
 * 
 * ¿Qué hace Join()?
 *  Une los elementos de un array en una sola cadena, usando un separador.
 *      let palabras = ["mundo", "hola"]
 *      let frase = palabras.join(separador)
 *      console.log(frase)
 */

console.log(invertirPalabras("Hola mundo esto es una prueba")); 


// 10. Crea una función que calcule el factorial de un número dado

    /**
     * El factorial de un entero positivo n:
     * el factorial de n o n factorial se define en principio como el producto de todos los números enteros positivos desde 1 
     * (es decir, los números naturales) hasta n.
     */

function factorial(n) {
  if (n < 0) {
    return "El factorial no está definido para números negativos";
  }

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(5));


