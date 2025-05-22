// 1. Crea una clase que reciba dos propiedades

// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 


// SOLUCIONES

// 1. Crea una clase que reciba dos propiedades
class Animal {
    constructor(especie, sonido){
        this.especie = especie
        this.sonido = sonido
    }

    static describir(animal){   // Método estatico añadido por el ejercicio 4
        console.log(`Es un ${animal.especie}`)
    }
}

let animal1 = new Animal("perro","ladrido")
console.log(animal1)


// 2. Añade un método a la clase que utilice las propiedades
Animal.hacerSonido = function(animal){
    console.log(`El animal: ${animal.especie}, emite un ${animal.sonido} `)
}


// 3. Muestra los valores de las propiedades e invoca a la función
console.log(`Hemos elegido al animal: ${animal1.especie}, y su sonido es el ${animal1.sonido}`)
Animal.hacerSonido(animal1)


// 4. Añade un método estático a la primera clase


// 5. Haz uso del método estático
Animal.describir(animal1)


// 6. Crea una clase que haga uso de herencia
class vehiculo {
    constructor(marca,modelo,añoFabricacion){
        this.marca = marca
        this.modelo = modelo
        this.añoFabricacion = añoFabricacion
    }
}

class coche extends vehiculo{
    constructor(marca,modelo, añoFabricacion, combustible, propietario){
        super(marca, modelo, añoFabricacion); // Llama al constructor de Vehiculo
        this.combustible = combustible
        this.propietario = propietario
    }
}

let vehiculo1 = new vehiculo("Toyota","Yaris",2021) 
console.log(vehiculo1)

let coche1 = new coche("Ford","Mondeo", 2021,"Gasolina","Pablo Puerta Casado")
console.log(coche1)


// 7. Crea una clase que haga uso de getters y setters

class Ciudadano {
    // Campos privados
    #nombre;
    #edad;
    #correo;
  
    constructor(nombre, edad, correo) {
      this.#nombre = nombre;
      this.#edad = edad;
      this.#correo = correo;
    }
  
    // Getter para nombre
    get nombre() {
      return this.#nombre;
    }

    // Getter para edad
    get edad() {
        return this.#edad
    }

    // Getter para correo
    get correo() {
        return this.#correo
    }

    // Setter para correo
    /**
     * @author Pablo Puerta Casado
     * @param {any} newCorreo
     */
    set correo(newCorreo){
        this.#correo = newCorreo
    }
}

let persona1 = new Ciudadano("Pablo",30,"Pablopuertacasado@gmail.com")
console.log(persona1)

persona1.correo = "nuevoCorreo@correo.es"

console.log(persona1.correo)
