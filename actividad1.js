// Almacena un texto en una variable y muéstralo en orden inverso en la consola.
//Ejemplo : 'SENATI' ->"ITANES"
const txt = "SENATI";
const longitud = txt.length;
let textoInvertido = "";

for (let i = longitud - 1; i >= 0; i--) {
  textoInvertido += txt.substring(i, i + 1);
}
console.log(textoInvertido);

// Crea una variable con una dirección de correo electrónico.
// Verifica que tenga exactamente un @.
//Ejemplo
// LM@gmial.com [check]
const correo = "jose@gmail.com";
const cantidadArrobas = correo.split("@").length - 1;
console.log(`¿El correo ${correo} es correcto? `);
const verificar = cantidadArrobas === 1;
if (verificar) {
  console.log(`CORRECTO`);
} else {
  console.log(`INCORRECTO`);
}
