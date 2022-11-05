// PIEDRA PAPEL O TIJERA

//alert de bienvenida al usuario
alert("Bienvenido a piedra papel o tijera, pulse aceptar para continuar");

const armas = ["piedra","papel","tijera"]

function elegirArma (arr) {
    return arr [Math.floor(Math.random() * arr.length )];
}

let armaCpu = elegirArma(armas);

//funcion para validar el arma ingresada
let armaUser = prompt ("Elige tu arma: \n1 - piedra \n2 - papel \n3 - tijera").toLowerCase();
while (armas.some(function(elemento) {
    return elemento == armaUser;} ) == false) {
        armaUser = prompt('Elige una opcion valida: \n1 - piedra \n2 - papel \n3 - tijera').toLowerCase();
    } 

//funcion para obtener el resultado de la partida
function resultadoPartida(arma1, arma2) {
    if (arma1 == arma2) {
        return'Empate!';
    } else if (arma1 == 'piedra') {
        if (arma2 == 'papel') {
            return'Perdiste! :(';
        } else {
            return'Ganaste! :)';
        }
    } else if (arma1 == 'papel') {
        if (arma2 == 'tijera') {
            return'Perdiste! :(';
        } else {
            return'Ganaste! :)';
        }
    } else if (arma1 == 'tijera') {
        if (arma2 == 'piedra') {
            return'Perdiste! :(';
        } else {
            return'Ganaste! :)';
        }
    }
}

// resultado
console.log(`Escogiste: ${armaUser} \nLa Computadora eligio: ${armaCpu}`);

console.log(resultadoPartida(armaUser, armaCpu));