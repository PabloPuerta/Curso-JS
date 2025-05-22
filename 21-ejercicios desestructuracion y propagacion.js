// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

// 3. Usa desestructuración para extraer dos propiedades de un objeto

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// 6. Usa propagación para combinar dos arrays en uno nuevo

// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación


// SOLUCIONES

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let arrayEjemplo = ["primer elemento", "segundo elemento", "tercer elemento", "cuarto elemento"]
let [primerElemento, segundoElemento] = arrayEjemplo
console.log(primerElemento," ", segundoElemento)


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [valor1, valor2, valor3, valor4, valor5 = "VALOR PREDETERMINADO"] = arrayEjemplo
console.log(valor1, valor2, valor3, valor4, valor5) 


// 3. Usa desestructuración para extraer dos propiedades de un objeto
let personaObjeto = {
    nombre : "Pablo",
    edad: 30,
    correo: "Pablopuertacasado@gmail.com"
}

let {nombre, edad} = personaObjeto
console.log(nombre, edad)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
let {nombre : nombreUsuario, edad: edadUsuario} = personaObjeto
console.log(nombreUsuario, edadUsuario)


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let personaObjeto2 = {
    nombre : "Pablo",
    edad: 30,
    correo: "Pablopuertacasado@gmail.com",
    trabajo : {
        nombrePuesto : "Programador",
        experiencia : 2,
    }
}

let {nombre: nombreUsuario2, edad : edadUsuario2, trabajo: {nombrePuesto: puestoUsuario2, experiencia: experienciaUsuario2}} = personaObjeto2
console.log(nombreUsuario2, edadUsuario2, puestoUsuario2, experienciaUsuario2)


// 6. Usa propagación para combinar dos arrays en uno nuevo
let arrayEjemplo2 = ["quinto elemento", "sexto elemento", "séptimo elemento"]
let myArrayConjunto = [...arrayEjemplo, ...arrayEjemplo2]
console.log(myArrayConjunto)


// 7. Usa propagación para crear una copia de un array
let myArrayCopia = {...arrayEjemplo}
console.log(myArrayCopia)


// 8. Usa propagación para combinar dos objetos en uno nuevo
let personaObjeto3 = {
    nombre2: "Jose",
    edad2: 64,
    correo2: "correoJose@gmail.com"
}

let objetoConjunto = {...personaObjeto2, ...personaObjeto3}
console.log(objetoConjunto)


// 9. Usa propagación para crear una copia de un objeto
let objetoCopia = {...personaObjeto2}
console.log(objetoCopia)