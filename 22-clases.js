// Clases
class Persona {
    constructor (nombre, alias, correo){
        this.nombre = nombre
        this.alias = alias
        this.correo = correo
    }
}


// Sintaxis
let persona1 = new Persona("Pablo","Lokotope","Pablopuertacasado@gmail.com")
let persona2 = new Persona("Pablo","Lokotope","Pablopuertacasado@gmail.com")

console.log(persona1)
console.log(typeof persona1)


// Valores por defecto
class DefaultPersona {
    constructor (nombre = "Sin nombre", alias = "Sin alias", correo = "Correo por defecto"){
        this.nombre = nombre
        this.alias = alias
        this.correo = correo
    }
}

let personaPorDefecto1 = new DefaultPersona("Pablo")
console.log(personaPorDefecto1)


// Acceso a propiedades
console.log(personaPorDefecto1.alias)
console.log(personaPorDefecto1["alias"])

personaPorDefecto1.alias = "Lokotope"

console.log(personaPorDefecto1["alias"])


// Funciones en clases
class PersonaFunciones {
    constructor (nombre, alias, correo){
        this.nombre = nombre
        this.alias = alias
        this.correo = correo
    }

    caminar(){
        console.log("La persona camina")
    }
}

let personaFunciones = new PersonaFunciones("Pablo","Lokotope","Pablopuertacasado@gmail.com")
personaFunciones.caminar()


// Propiedades privadas
class PersonaPrivada{
    #cuentaBancaria
    constructor (nombre, alias, cuentaBancaria){
        this.nombre = nombre
        this.alias = alias
        this.#cuentaBancaria = cuentaBancaria
    }

    pagar(){
        this.#cuentaBancaria
    }
}

let personaPrivada = new PersonaPrivada("Pablo","Lokotope","IBAN067896")

// console.log(personaPrivada.#cuentaBancaria) // No se puede acceder a esta propiedad fuera de la clase


// Getter y Setter
class GetSetPersona {

    #nombre
    #alias
    #correo
    #banco
    
    constructor (nombre, alias, correo, banco){
        this.#nombre = nombre
        this.#alias = alias
        this.#correo = correo
        this.#banco = banco
    }

    get nombre(){
        return this.#nombre
    }

    set banco(nuevoBanco){
        this.#banco = nuevoBanco
    }
}

personaGetPersona = new GetSetPersona("Pablo","Lokotope","Pablopuertacasado@gmail.com", "IBAN067896")

console.log(personaGetPersona)
console.log(personaGetPersona.nombre)

personaSetPersona = new GetSetPersona("Pablo","Lokotope","Pablopuertacasado@gmail.com", "IBAN067896")

personaSetPersona.banco = "Nueva Cuenta Bancaria"

console.log(personaSetPersona.banco)


// Métodos estáticos

class OperacionesMatematicas {
    static suma(a, b){
     return a + b
    }
}

console.log(OperacionesMatematicas.suma(5,4))