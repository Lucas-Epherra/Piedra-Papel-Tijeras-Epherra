// PIEDRA PAPEL O TIJERA

//alert de bienvenida al usuario
const bienvenida = () => {
    alert("Bienvenido a piedra papel o tijeras, pulse aceptar para continuar");
}

bienvenida();

let usuario;
let PC = "computadora";

// funcion que captura la entrada y le da valor a la variable usuario
const entradaUsuario = () => {
    usuario = prompt("Por favor ingrese su nombre para continuar");
    return usuario;
}

usuario = entradaUsuario();

console.log("El jugador es " + usuario);


//objetos de jugadores con nombre y puntuacion

let puntos = [
    jugador = {
        nombre: usuario,
        puntaje: 0,
    },
    jugadorPc = {
        nombre: PC,
        puntaje: 0,
    }
]

//array de armas
const armas = ["piedra", "papel", "tijera"]

//funcion para que el ordenador elija su arma
function elegirArma(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// la variable toma el valor del resultado de la funcion de arriba
let armaCpu;

//funcion flecha para mostrar el menu de opciones
const opciones = () => {
    return ("Hola " + usuario + " !! ingresa tu eleccion: \nOpciones: \n1 = Piedra \n2 = Papel \n3 = Tijera")
}

//funcion para validar el numero ingresado , permitiendo solo de 1 al 3
let cortarFuncion = true;
let opcionJugador;

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

let mostrarEleccion;

let ganador;

//Funcion para la batalla
const batalla = () => {
    if (opcionJugador == "piedra" && armaCpu == "tijera") {
        ganador = usuario;
        alert("Has ganado la ronda :D !! \n" + mostrarEleccion);
    } else if (opcionJugador == "papel" && armaCpu == "piedra") {
        ganador = usuario;
        alert("Has ganado la ronda :D !!\n" + mostrarEleccion);
    } else if (opcionJugador == "tijera" && armaCpu == "papel") {
        ganador = usuario;
        alert("Has ganado la ronda :D !!\n" + mostrarEleccion);
    } else if (opcionJugador == armaCpu) {
        ganador = "empate";
        alert("La ronda fue un empate :O !!\n" + mostrarEleccion);
    } else {
        ganador = PC;
        alert("Has perdido la ronda :C !!\n" + mostrarEleccion);
    }
}

//funcion con switch para transformar el numero a string con el valor deseado
const transformToString = () => {
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
}

const mostrarAlertPuntos = () =>alert("El jugador " + usuario + " tiene " + puntos[0].puntaje + " puntos \nEl jugador pc tiene " + puntos[1].puntaje + " puntos");


const scores = () => {
    if (ganador === usuario) {
        puntos[0].puntaje++;
        mostrarAlertPuntos();
    } else if (ganador === PC) {
        puntos[1].puntaje++;
        mostrarAlertPuntos();
    } else {
        alert("empate no mueve puntos");
        mostrarAlertPuntos();
    }
}

// funcion que llama a las funciones declaradas anteriormente para ejecutar el juego

// let score;

const ejecutarJuego = () => {

    armaCpu = elegirArma(armas);

    opcionJugador = validarNumero();

    transformToString();

    let alertEleccion = "El jugador " + usuario + " ha elegido " + opcionJugador + "\nLa computadora ha elegido " + armaCpu

    mostrarEleccion = alertEleccion;

    batalla();

    scores();
}

const definirCampeon = () => {
    if (puntos[0].puntaje === 5) {
        alert("Felicidades " + usuario + " es el campeon del piedra papel o tijeras !!!");
        console.log("Felicidades " + usuario + " es el campeon del piedra papel o tijeras !!!");
    } else if (puntos[1].puntaje === 5) {
        alert("La " + PC + " es el campeon del piedra papel o tijeras !!!");
        console.log("La " + PC + " es el campeon del piedra papel o tijeras !!!");
    }
}

let pararJuego = true;

const juegoDeCincoRondas = () => {
    while (pararJuego == true) {
        ejecutarJuego();
        if (puntos[0].puntaje === 5 || puntos[1].puntaje === 5) {
            pararJuego == false;
            return definirCampeon();
        }
    }
}

juegoDeCincoRondas();


