//Almacena run texto en una varible y luego mostralo en orden inverso en la consola
//Ejemplo : 'SENATI' ->"ITANES"
const txt = "SENATI";
const longitud = txt.length;

for (let i = longitud - 1; i >= 0; i--) {
  console.log(txt.substring(i, i + 1).concat(txt));
}
//Crear un avarible donde almacenes una direccion de correo electronico
//Verificar cuando el correo es valido cuando tiene un solo  @
//Ejemplo
// LM@gmial.com [check]
const correo = "jhon@gmail.com";
const cantidadArrobas = correo.split("@").length - 1;
const esCorrecto = cantidadArrobas === 1;
console.log(`¿El correo es correcto? ${esCorrecto}`);
//
