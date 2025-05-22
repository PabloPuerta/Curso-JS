// 1. Captura una excepción utilizando try-catch

// 2. Captura una excepción utilizando try-catch y finally

// 3. Lanza una excepción genérica

// 4. Crea una excepción personalizada

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10


// SOLUCIONES


// 1. Captura una excepción utilizando try-catch
try{
    console.log(persona.edad)
}catch{
    console.log("Se ha producido un error")
}


// 2. Captura una excepción utilizando try-catch y finally
try{
    console.log(persona.edad)
}catch{
    console.log("ERROR EN LA APP")
}finally{
    console.log("Fin de la ejecución")
}


// 3. Lanza una excepción genérica
    //throw new Error("Esto es un error genérico")


// 4. Crea una excepción personalizada
class LanzamientoError01 extends Error {
    constructor(mensaje, numero1, numero2) {
        super(mensaje);
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    numerosError() {
        console.log(this.numero1, "+", this.numero2);
    }
}


// 5. Lanza una excepción personalizada
function sumarNumeros(numero1, numero2) {
    // Simulamos una condición para lanzar el error
    if (numero1 < 0 || numero2 < 0) {
        throw new LanzamientoError01("No se permiten números negativos", numero1, numero2);
    }
    return numero1 + numero2;
}

try {
    console.log(sumarNumeros(-6, 6));
} catch (error01) {
    console.log("Se ha producido un error personalizado:", error01.message);
    error01.numerosError();
}


// 6. Lanza varias excepciones según una lógica definida

class Error01 extends Error{
    constructor(errorMessage) {
        super(errorMessage)
        this.name = "Error01"
    }

    mensajeError(){
        return "Usuario incorrecto"
    }
}

class Error02 extends Error{
    constructor(errorMessage){
        super(errorMessage)
        this.name = "Error02"
    }

    mensajeError(){
        return "Contraseña incorrecta"
    }
}

function comprobarPassword(pass){
    if(pass != "Lokotope"){
        throw new Error02("Contraseña incorrecta")
    }else{
        console.log("Bienvenido Pablo")
    }
}

try{
    comprobarPassword("Lokotope")
}catch(e) {
    if(e instanceof Error01 || e instanceof Error02) {
        console.log(e.mensajeError())
    }
}