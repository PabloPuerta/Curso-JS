// Funciones


// Función simple

function myFunction (){
    console.log("Hola, esta es mi primera función")
}

myFunction()

// Función con parámetros

function myFunctionParam (name){
    console.log(`Hola, ${name}`)
}

myFunctionParam("Pablo")

// Funciones anónimas

const myFunc2 = function (name){
    console.log(`Hola ${name}`)
}

myFunc2("Pablo")

// Arrow functions (funciones flecha)

const myFunction3 = (name) => {
    console.log(`Hola ${name}`)

}

myFunction3("Elisa")

const myFunction4 = (name) => console.log(`Hola ${name}`)

myFunction4("Elisa")


// Parámetros

function sum(a, b){
    console.log(a + b)
}

sum(4,5)
sum(4)

// Valores por defecto

function defaultSum(a = 0, b = 0){
    console.log(a + b)
}

defaultSum(4, 5)
defaultSum(4)

// Retorno de valores

function mult(a , b){
    return a * b
}
console.log(mult(2,5))

let resultado = mult(2,5)
console.log(resultado)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern(){
        console.log("Función interna")
    }
    intern() // de esta manera se llama a la funcion anidada
}

extern()
// intern() Fuera del scope

extern()

// Funciones de orden superior

function applyFunct(funcion, param){
    funcion(param)
}

applyFunct(myFunction4,"Funcion de orden superior")

// forEach

myArray = [1,2,3,4]

myArray.forEach(function(value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet = new Set(["Pablo","Elisa","Tina"])
mySet.forEach((value) => console.log(value))

myMap = new Map([
    ["nombre", "Pablo"],
    ["email", "Pablopuertacasado@gmail.com"],
    ["edad", 30]
])

myMap.forEach((value) => console.log(value))

