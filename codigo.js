// let nombre = prompt("Dime tu nombre");

// while (nombre == "") {
//   alert(`Por favor introduce tu nombre`);
//   nombre = prompt("Dime tu nombre");
// }
// alert(`Muy bien ${nombre}, por favor introduce tu edad a continuación`);
// let edadUsuario = prompt(`Introduce tu edad`);
// while (edadUsuario == "") {
//   alert(`Por favor introduce tu edad`);
//   edadUsuario = prompt("Introduce tu edad");
// }
// mensaje1 = `De acuerdo ${nombre}, tu edad es de ${edadUsuario} años`;

// //Operadores Aritméticos

// // let edad = edadUsuario;
// // let anhoActual = 2023;
// // fechaNacimiento = anhoActual - edad;
// // document.write(mensaje1);
// // mensaje2 = `<br> y tu año de nacimiento fue en: ${fechaNacimiento}`;
// // document.write(mensaje2);

// numero1 = parseInt(prompt(
//   `Por favor introduce el primer número para aplicarle un cálculo matemático`
// ));
// while(isNaN(numero1)) {
//   alert(`Por favor introduce un numero valido`);
//     numero1 = parseInt(prompt(
//         `Por favor introduce el primer número para aplicarle un cálculo matemático`
//       ));
// }

// numero2 = parseInt(prompt(
//   `Por favor introduce el segundo número para aplicarle un cálculo matemático`
// ));
// while(isNaN(numero2)) {
//   alert(`Por favor introduce un numero valido`);
//     numero2 = parseInt(prompt(
//         `Por favor introduce el segundo número para aplicarle un cálculo matemático`
//       ));
// }

// resultadoSuma = `El resultado de tus valores introducidos como Suma es: ${
//   (numero1 + numero2)
// } `;

// resultadoResta = `El resultado de tus valores introducidos como Resta es: ${
//   numero1 - numero2
// } `;

// resultadoMultiplicacion = `El resultado de tus valores introducidos como Multiplicación es: ${
//   numero1 * numero2
// }  `;

// resultadoDivision = `El resultado de tus valores introducidos como Division es: ${
//   numero1 / numero2
// } `;

// document.write(`Los valores a calcular que introduciste fueron "${numero1}" como primer valor y "${numero2}" como segundo valor`);
// document.write(`<br> ${resultadoSuma}`);
// document.write(`<br> ${resultadoResta}`);
// document.write(`<br> ${resultadoMultiplicacion}`);
// document.write(`<br> ${resultadoDivision}`);

//Concatenación

// saludo = "¡Hola Pedro!" 
// pregunta = "¿Cómo estás?"
// sp = " ";
// frase = saludo + sp + pregunta;

// document.write(`${frase}`)


// //Operadores de Comparación
// == Igualdad: comprueba si dos valores son iguales, convirtiendo los tipos de datos si es necesario.
// === Igualdad estricta: comprueba si dos valores son iguales, sin realizar ninguna conversión de tipo de datos.
// (!=) Desigualdad: comprueba si dos valores son diferentes, convirtiendo los tipos de datos si es necesario.
// (!==) Desigualdad estricta: comprueba si dos valores son diferentes, sin realizar ninguna conversión de tipo de datos.
// < Menor que: comprueba si el primer valor es menor que el segundo.
// > Mayor que: comprueba si el primer valor es mayor que el segundo.
// <= Menor o igual que: comprueba si el primer valor es menor o igual que el segundo.
// >= Mayor o igual que: comprueba si el primer valor es mayor o igual que el segundo.

// let numero = 13;
// let numero2 = 13;

// if (numero == numero2) {
//   console.log(`Los numeros son iguales`);
// } else {
//   console.log(`Los numeros no son iguales`);
  
// }

//Arrays
// let frutas = ["banana", "manzana", "pera"];
// document.write(frutas[0]);

//Arrays asociativos
//Los arrays asociativos necesitamos acceder a ellos con ("")
// let pc = {
//   nombre: "DaltoPC",
//   procesador: "Intel Core I7",
//   ram:"16GB",
//   espacio:"1TB"
// }

// let nombre = (`${pc["nombre"]}`)
// let procesador =  (`${pc["procesador"]}`)
// let ram = (`${pc["ram"]}`)
// let espacio = (`${pc["espacio"]}`)
// document.write(`<br> El nombre de la PC es: <b>${nombre}</b>`);
// document.write(`<br> La cantidad de RAM es: <b>${ram}</b>`);
// document.write(`<br> El procesador es: <b>${procesador}</b>`);
// document.write(`<br> El espacio es: <b>${espacio}</b>`);
