const prompt = require('prompt-sync')();

const pinCorrecto = "3421";
let intento = prompt("Ingresa el PIN: ");

while(intento !== pinCorrecto){
    console.log("El PIN que ingresaste es incorrecto. Vuelva a intentarlo");
    intento = prompt("Ingresa el PIN: ");
}

console.log("¡Bienvenido a la app!");
