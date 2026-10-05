let movimientos = [-10000, -400000, -55000, 620000, 750000, 90000];
let total = 0;
let cantidadRetiros = 0;

for(let movimiento of movimientos){
    total += movimiento;
    if(movimiento < 0){
        cantidadRetiros += 1;
    }
}

console.log(`Total del mes: ${total}`);
console.log(`Cantidad de retiros realizados: ${cantidadRetiros}`);