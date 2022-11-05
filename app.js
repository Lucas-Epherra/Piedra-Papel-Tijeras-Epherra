// PIEDRA PAPEL O TIJERA

//alert de bienvenida al usuario
alert("Bienvenido a piedra papel o tijeras, pulse aceptar para continuar");

let usuario;

// funcion que captura la entrada y le da valor a la variable usuario
const entradaUsuario = () => {
    usuario = prompt("Por favor ingrese su nombre para continuar");
    return usuario;
}

usuario = entradaUsuario();

console.log(usuario);

//array de armas
const armas = ["piedra","papel","tijera"]

//funcion para que el ordenador elija su arma
function elegirArma (arr) {
    return arr [Math.floor(Math.random() * arr.length )];
}

// la variable toma el valor del resultado de la funcion de arriba
let armaCpu = elegirArma(armas);

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
    if (opcionJugador == "piedra" && armaCpu == "tijera") {
        alert("Has ganado :D !!");
        console.log("El usuario " + usuario + " ha ganado");
    } else if (opcionJugador == "papel" && armaCpu == "piedra") {
        alert("Has ganado :D !!");
        console.log("El usuario " + usuario + " ha ganado");
    } else if (opcionJugador == "tijera" && armaCpu == "papel") {
        alert("Has ganado :D !!");
        console.log("El usuario" + usuario + " ha ganado");
    } else if (opcionJugador == armaCpu) {
        alert("Es un empate :O !!");
        console.log("Ha ocurrido un empate");
    } else {
        alert("Has perdido :C !!");
        console.log("El usuario " + usuario + " ha perdido");
    }
}

//funcion flecha para mostrar el menu de opciones
const opciones = () => {
    return ("Hola " + usuario + " !! ingresa tu eleccion: \nOpciones: \n1 = Piedra \n2 = Papel \n3 = Tijera")
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

console.log("La computadora ha elegido " + armaCpu);

batalla();

