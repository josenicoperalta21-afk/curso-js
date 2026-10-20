//objeto
const automovil = {
  marca : "Toyota",
  modelo: "Rav4",
  anios:2025,
  operativo:true,
  valor:120000,

placa : "ABC-123",
propietarios : [
  {titular:"Roxana",fecha:"2025-01-10",precio :118000},
{titular:"Hugo",fecha:"2015-11-25",precio:115000},
{titular:"Pedro",fecha:"2025-06-05",precio:119800}]
}

//Es posible actaualizacion de informacion
automovil.anio=2024
automovil["anio"]=2024

//Cambio e ne ele arreglo
automovil.propietarios[0].titular="Patricia"
automovil.propietarios[2].precio=122000

//Sera posible agregar unva clave y valor
automovil["color"]="blanco"
automovil["equipo"]= "FULL"
console.log(automovil)