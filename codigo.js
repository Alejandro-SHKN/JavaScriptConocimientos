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

//Bucles de Interaccion

// let numero = 0;

// while (numero < 10) {
//   numero++;
//   document.write(`${numero} <br>`);
// }

// break
// let numero = 0;
// while (numero < 1000) {
//   numero++
//   document.write(`${numero} <br>`)
//   if (numero == 500) {
//     document.write(`fin`)
//     break;
//   }
// }

//For se compone por tres partes Declarar, Iniciar Iterar.

// for(let i =0; i<=10; i++){
//   document.write(`${i} <br>`)
// }

//Continue

// let i = 0;
// while (i<100) {
//     i++;
//     if (i==15) {
//         continue;
//     }
//     document.write(`${i} <br>`);

// }
//for in/of

// let animales =["gato", "perro", "tiranosaurio rex"];
// for(animal in animales){
//     document.write(`${animal} <br> `)
// }
// for(animal of animales){
//     document.write(`${animal} <br>`)

// }

// array1 =["maria", "josefa", "roberta"];
// array2 =["pedro", "marcelo", "julio"];

// for(arrayUno in array1){
//     document.write(`${arrayUno} <br>`)
// }

// for(arrayDos of array2){
//     document.write(`${array2[2]} <br>`)
// }

//Funciones {}

// function saludar() {
//   respuesta = prompt(`Hola Pablo, ¿Cómo va tu día?`);
//   if (respuesta == "bien") {
//     alert(`Me alegro`);
//   } else {
//     alert(`Lamento oir eso`);
//   }
// }

// saludar();
// saludar();

// return;
// function saludar(){
//     alert(`Hola`);
//     return(`La funcion se ejecutó correctamente`);
// }
// let saludo = saludar();
// document.write(`${saludo}`);

// function preguntaDia(){
//     prompt(`¿Cómo estuvo tu día?`);
//     return (`Este es un return despúes del promt`);
// }
// let functíonReturn = preguntaDia();
// preguntaDia();

// document.write(`${preguntaDia()}`);

//parámetros
// let num1 = 32;
// let num2 = 12;

// function suma(){
//     let res = num1 + num2;
//     document.write(`${res}`)
// }
// suma();

// function suma(){
// let num1 = prompt(`Introduce tu primer numero a sumar`);
// let num2 = prompt(`Introduce el segundo numero para sumar`);
// let res = Number(num1) + Number(num2);
// return res;
// }
// let resultado = suma();
// document.write(`${resultado}`);

// function suma(){
//     let num1 = prompt(`Introduce tu primer numero para sumar`);
//     while (isNaN(num1)|| num1=="") {
//         alert(`Por favor introduce solo numeros`)
//         num1 = prompt(`Introduce tu primer numero para sumar`);
//     }
//     let num2 = prompt(`Introduce el segundo número para sumar`);
//     while (isNaN(num2)|| num2 =="") {
//         alert(`Por favor introduce solo numeros`)
//         num2 = prompt(`Introduce tu segundo numero para sumar`);
//     }
//     let res = Number(num1)+Number(num2);
//     return res;
// }

// let resultadoSuma = suma();
// document.write(`El resultado de la suma es ${resultadoSuma}`);

