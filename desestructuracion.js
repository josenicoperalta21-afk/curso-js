//Estrucuras = OBJETO
//Desestructuracion = ABRIR OBJETOS
const persona = {
  apellidos: "Peralta",
  nombre: "Nicolas",
  edad: 21,
  skills: ["PHP", "Java", "Javascript", "SQL", "Python"],
};
//const apellidos =persona.apellidos

//Desestructuras es separar datos provenientes de un objeto
//NOTA: No es necesario recuperar toda la colecion
//Nota: La varaiable deben coincidir con las claves
const { apellidos, nombre, edad, skills } = persona;

console.log(apellidos, nombre, edad, skills);
