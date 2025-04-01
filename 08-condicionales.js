// Condicionales o estructuras de control

// if, else if, else

// if (si)
let edad = 20

if(edad >= 18){
    console.log("La edad del usuario permite su acceso al sistema")
}

if (edad < 18){
    console.log("La edad del usuario NO permite el acceso al sistema")
}

// else (si no)
if(edad >= 18){
    console.log(`El usuario tiene ${edad} años`)
}else{
    console.log(`El usuario NO es mayor de edad`)

}


// else if (si no, si)
if(edad >= 18){
    console.log(`El usuario es mayor de edad`)
}else if (edad < 18){
    console.log(` ALERTA! El usuario es menor de edad`)
}


// Operadores ternarios
let resultado = edad >= 18 ? "La edad es mayor a la esperada" : "La edad es menora  la esperada"
console.log(resultado)

// Switch
let dia = 4
let nombreDia 

switch(dia){
    case 0 :
        nombreDia = "Lunes"
        break
    case 1 :
        nombreDia = "Martes"
        break
    case 2 :
        nombreDia = "Miercoles"
        break
    case 3 :
        nombreDia = "Jueves"
        break
    case 4 :
        nombreDia = "Viernes"
        break
    case 5 :
        nombreDia = "Sabado"
        break
    case 6 : 
        nombreDia = "Domingo"    
        break
    default :
    nombreDia = "Número de día incorrecto"
}

console.log(nombreDia)
