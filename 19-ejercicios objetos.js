
// 1. Crea un objeto con 3 propiedades

// 2. Accede y muestra su valor

// 3. Agrega una nueva propiedad

// 4. Elimina una de las 3 primeras propiedades

// 5. Agrega una función e invócala

// 6. Itera las propiedades del objeto

// 7. Crea un objeto anidado

// 8. Accede y muestra el valor de las propiedades anidadas

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales


// SOLUCIONES

// 1. Crea un objeto con 3 propiedades

let usuario = {
    nombre : "Pablo",
    edad : 30,
    email: "Pablopuertacasado@gmail.com"
}


// 2. Accede y muestra su valor

console.log(usuario)


// 3. Agrega una nueva propiedad

usuario.isAdmin = true  // añadir la propiedad isAdmin
console.log(usuario)


// 4. Elimina una de las 3 primeras propiedades

delete usuario.edad     // eliminar la propiedad edad
console.log(usuario)


// 5. Agrega una función e invócala

usuario.edad = 30

 usuario.verUsuario = function detalles(){
    console.log("El usuario" + " " + usuario.nombre + " tiene" + " " + usuario.edad + " años.")
 }

usuario.verUsuario()


// 6. Itera las propiedades del objeto

for (let clave in usuario) {
    console.log(clave);            // nombre, edad, email
    console.log(usuario[clave]);  // Pablo, 30, Pablopuertacasado@gmail.com
}


// 7. Crea un objeto anidado

let persona7 = {
    nombre : "Jose",
    edad : 64,
        aficiones:  {
            nombreAficion : "dibujar",
            experiencia : 10
        }
}


// 8. Accede y muestra el valor de las propiedades anidadas

console.log("El usuario" + " " + persona7.nombre + " tiene " + persona7.edad + " años." + " Su afición es " + persona7.aficiones.nombreAficion)


// 9. Comprueba si los dos objetos creados son iguales

console.log(usuario == persona7)
console.log(usuario === persona7)


// 10. Comprueba si dos propiedades diferentes son iguales

console.log(usuario.nombre == persona7.nombre)