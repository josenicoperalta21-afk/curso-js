//Actividad 2.1
//Crear un objeto que almacene datos de una mascota 
//desestructurar utilizando un minito de 4 variables 
//mostrar en consola.

const mascota = {
	nombre: "Luna",
	especie: "perro",
	edad: 3,
	color: "café"
};

const { nombre, especie, edad, color } = mascota;

console.log(nombre, especie, edad, color);