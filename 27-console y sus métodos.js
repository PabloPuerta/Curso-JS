// Console 

//log
console.log("Esto es console.log() y permite mostrar información por consola")


// error
console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida"))


// warnings
console.warn("Este es un mensaje de advertencia")


// info
console.info("Esto es un mensaje informativo")


// tablas
let data = [
    {nombre: "Pablo", edad:  30},
    {nombre: "Elisa", edad:  26}
]

console.table(data)



let data2= [
    ["Pablo",30],
    ["Elisa", 26]
]

console.table(data2)


// group
console.group("Usuario:")
console.log("Nombre: Pablo")
console.log("Edad: 30")
console.groupEnd()


// time
console.time("Tiempo de ejecución")

for(let i = 0; i < 10000; i ++){

}

console.timeEnd("Tiempo de ejecución")


// assert
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")


// count
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")

console.count("Click")


// trace

function funcionA(){
    funcionB()
}

function funcionB(){
    console.trace("Seguimiento de la ejecución")
}

funcionA()


// clear
    //console.clear()