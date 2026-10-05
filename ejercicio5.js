let usuarios = [
  {
    nombre: "usuario1",
    movimientos: [-10000, -400000, -55000, 620000, 750000, 90000],
  },
  {
    nombre: "usuario2",
    movimientos: [10000, 400000, 55000, -620000, 750000, -90000],
  },
  {
    nombre: "usuario3",
    movimientos: [-10000, 700000, -55000, 620000, -750000, 120000],
  },
];

for(let usuario of usuarios){
    console.log(usuario.nombre);
    let totalUsuario = 0;
    for(let m of usuario.movimientos){
        totalUsuario += m
        
    }
    console.log(`Gasto total: ${totalUsuario}`);
}


