// PIEDRA PAPEL O TIJERA

alert("Bienvenido a piedra papel o tijeras, pulse aceptar para continuar");

let usuario;

const entradaUsuario = () => {
    usuario = prompt("Por favor ingrese su nombre para continuar");
    return usuario;
}

usuario = entradaUsuario();

console.log(usuario);

let opcionPc;

let aleatorio = Math.floor(Math.random() * 3);

//este bloque de codigo realiza la eleccion del numero por parte del jugador pc
// 0 -> piedra
// 1 -> papel
// 2 -> tijera

if (aleatorio == 0) {
    opcionPc = "piedra"
} else if (aleatorio == 1) {
    opcionPc = "papel"
} else {
    opcionPc = "tijera"
}

//funcion para validar el numero ingresado , permitiendo solo de 1 al 3
function validarNumero() {
    while (cortarFuncion == true) {
        opcionJugador = parseInt(prompt(opciones()));
        if (opcionJugador < 4 && opcionJugador > 0) {
            cortarFuncion == false;
            return opcionJugador;
        } else {
            alert("El numero elegido es incorrecto.")
            continue;
        }
    }
}

//Funcion para la batalla
const batalla = () => {
    if (opcionJugador == "piedra" && opcionPc == "tijera") {
        alert("Has ganado :D !!");
        console.log("El usuario " + usuario + " ha ganado");
    } else if (opcionJugador == "papel" && opcionPc == "piedra") {
        alert("Has ganado :D !!");
        console.log("El usuario " + usuario + " ha ganado");
    } else if (opcionJugador == "tijera" && opcionPc == "papel") {
        alert("Has ganado :D !!");
        console.log("El usuario" + usuario + " ha ganado");
    } else if (opcionJugador == opcionPc) {
        alert("Es un empate :O !!");
        console.log("Ha ocurrido un empate");
    } else {
        alert("Has perdido :C !!");
        console.log("El usuario " + usuario + " ha perdido");
    }
}

//funcion flecha para mostrar el menu de opciones
const opciones = () => {
    return ("Hola " + usuario + " !!, ingresa tu eleccion: \nOpciones: \n1 = Piedra \n2 = Papel \n3 = Tijera")
}

let cortarFuncion = true;
let opcionJugador;

opcionJugador = validarNumero();

// switch para transformar el numero a string con el valor deseado
switch (opcionJugador) {
    case 1:
        opcionJugador = "piedra"
        break;
    case 2:
        opcionJugador = "papel"
        break;
    case 3:
        opcionJugador = "tijera"
        break;
}


console.log("El usuario ha elegido " + opcionJugador);

console.log("La computadora ha elegido " + opcionPc);



batalla();

