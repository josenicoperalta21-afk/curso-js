//Cadena conjunto de caarcteres
//1 solo cxaracter = CHAR

//Existen 3 formas para crear cadenas js
const tradicional = "Hola soy un txt";
const simples = "Un gusto conocerte";
const mensaje = `Un gusto conocerte`;

//Backticks permiti multilineas  + inyecion
const nombre = "Nose";
const carrera = "Programador";

const historia = `
Esta es la historia de ${nombre}
un ${carrera}
que solo  queria videcodear
`;
console.log(historia);

//propiedades
const longitud = carrera.length; //Total de caracteres
console.log(longitud);

// Métodos
console.log("concat:", carrera.concat(nombre)); //Contatenar (unir)
console.log("repeat:", carrera.repeat(3)); //repetri
console.log("replace:", carrera.replace("a", "@")); //reemplzar
console.log("uppercase", carrera.toUpperCase()); //mayuscula
console.log("towercase", carrera.toLocaleLowerCase()); //minuscula
console.log("replace all", carrera.replaceAll("a", "@")); //reemplzar todo
console.log("split", carrera.split(",")); //devuelve un array
console.log("trim", carrera.trim()); //quita esapcios vacios extremso

//Extare klas 3 primeras caracteres
console.log("3 primeros:", carrera.substring(0, 3));

//Extrae  "grama" d e progrmamador
console.log("caracteres internos:", carrera.substring(3, 8));
