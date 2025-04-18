// Objetos

// Sintaxis

let persona = {
    name: "Pablo",
    edad: 30,
    alias: "Lokotope"
}


// Acceso a las propiedades


// Notación punto
console.log(persona.name)


// Notacion de corchetes
console.log(persona["name"])


// Modificación de propiedades
persona.name = "Jose"
console.log(persona.name)

persona["name"] = "Pablo"
console.log(persona.name)


// Eliminación de propiedades
delete persona.edad
console.log(persona)


// Añadir propiedades
persona.email = "Pablopuertacasado@gmail.com"
console.log(persona)


// Métodos (funciones)
let persona2 = {
    nombre: "Elisa",
    edad: 26,
    walk: function(){
        console.log("La persona camina")
    }
}

persona2.walk()


// Anidar objetos
let persona3 ={
    nombre: "Jose",
    edad: 64,
    walk: function(){
        console.log("La persona camina")
    },
    trabajo: {
        puesto: "Mantenimiento",
        experiencia: 5,
        walk: function(){
            console.log("Trabajador en la empresa")
        }
    }
}

console.log(persona3)

console.log(persona3.nombre)
console.log(persona3.trabajo)
console.log(persona3.trabajo.puesto)
console.log(persona3.trabajo.walk())


// Igualdad de objetos
let persona4 = {
    name: "Pablo",
    edad: 30,
    alias: "Lokotope"
}

let persona5 = {
    name: "Pablo",
    edad: 30,
    alias: "Lokotope"
}

console.log(persona4)
console.log(persona5)

console.log(persona4 == persona5)
console.log(persona4 === persona5)

console.log(persona4.nombre == persona5.nombre)


// Iteración