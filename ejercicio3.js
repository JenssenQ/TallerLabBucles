const prompt = require("prompt-sync")();

const menu = ["1) Ver saldo", "2) Enviar dinero", "3) Recargar", "4) Salir"];
let opcion;
do {
console.log(menu);
opcion = Number(prompt("Ingresa la opción: "));
  if (opcion === 1) {
    console.log("Estas en 1) Ver saldo");
  } else if (opcion === 2) {
    console.log("Estas en 2) Enviar dinero");
  } else if (opcion === 3) {
    console.log("Estas en 3) Recargar");
  }
} while (opcion !== 4)
{
  console.log("Adios.");
}


