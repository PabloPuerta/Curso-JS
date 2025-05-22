// Herencia 
class Animal {
    constructor(nombre){
        this.nombre = nombre
    }

    sonidoAnimal(){
        console.log("Emite el sonido de su especie")
    }
}

class Perro extends Animal{
    correr(){
        console.log("El perro corre")
    }

    sonidoAnimal(){
        console.log("Guau")
    }
}

class Pez extends Animal{
    constructor(nombre, tamaño){
        super(nombre)
        this.tamaño = tamaño
    }
    nadar(){
        console.log("El pez nada")
    }
}

let miPerro = new Perro("LokoPerro")
miPerro.correr()
miPerro.sonidoAnimal()

let miPez = new Pez("LokoPez",10)
miPez.nadar()
miPez.sonidoAnimal()
miPez.correr()



