let myArray = [1,2,3,4]

let persona = {
    nombre: "Pablo",
    edad: 30,
    correo: "Pablopuertacasado@gmail.com"
}

let myValue = myArray[1]
console.log(myValue)

let myName = persona.nombre
console.log(myName)


// Desestructuración

// Sintaxis arrays
let [myValue0, myValue1, myValue2, myValue3,myValue4] = myArray
console.log(myValue0, myValue1, myValue2, myValue3,myValue4)


// Sintaxis arrays con valores predeterminados
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5, myValue6, myValue7, myValue8, myValue9)


// Ignorar elementos de un array
let [myValue10, , ,myValue13] = myArray
console.log(myValue10)
console.log(myValue13)


// Sintaxis objetos
let {nombre, edad, correo} = persona
console.log(nombre, edad, correo)


// Sintaxis objetos con valores predeterminados
let {nombre1, edad1, correo1 = "email@email.com"} = persona
console.log(nombre1,edad1,correo1)


// Sintaxis objetos con nuevos nombres de variables
let {nombre : nombre3, edad : edad3, correo : correo3} = persona
console.log(nombre3,edad3,correo3)


// Desestructuración de objetos anidados
let persona3 ={
    nombre: "Jose",
    edad: 64,
    walk: function(){
        console.log("La persona camina")
    },
    trabajo: {
        puesto: "Mantenimiento",
        experiencia: 5,
        work: function(){
            console.log(persona3.nombre + " trabaja en la empresa")
        }
    }
}

let {nombre : nombreUsuario, edad: edadUsuario, trabajo : {puesto: puestoTrabajo}} = persona3
console.log(nombreUsuario, edadUsuario, puestoTrabajo)


// Propagación (...)


//Sintaxis arrays
let myArray2 = [...myArray, 5, 6]
console.log(myArray2)


// Copia de arrays y suplementación
let myArray3 = [...myArray]
console.log(myArray3)


// Combinacion de arrays
let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4)


// Sintaxis objetos
let persona4 = {...persona}
console.log(persona4)

// Copia de objetos
let personaObjeto = {...persona3}
console.log(personaObjeto)