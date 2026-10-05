let movimientos = [10000, 0, 0, 620000, 750000, 0];
let pagoComercio = 750000;
for(let i = 0; i < movimientos.length; i++){
    if(movimientos[i] === 0){
        continue;
    }
    if(movimientos[i] === pagoComercio){
        console.log(`La posición del pago es: ${i}`);
        break;
        
    }
}