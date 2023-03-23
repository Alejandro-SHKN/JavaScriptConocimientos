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

// let edad = edadUsuario;
// let anhoActual = 2023;
// fechaNacimiento = anhoActual - edad;
// document.write(mensaje1);
// mensaje2 = `<br> y tu año de nacimiento fue en: ${fechaNacimiento}`;
// document.write(mensaje2);

numero1 = parseInt(prompt(
  `Por favor introduce el primer número para aplicarle un cálculo matemático`
));
while(isNaN(numero1)) {
  alert(`Por favor introduce un numero valido`);
    numero1 = parseInt(prompt(
        `Por favor introduce el primer número para aplicarle un cálculo matemático`
      ));
}

numero2 = parseInt(prompt(
  `Por favor introduce el segundo número para aplicarle un cálculo matemático`
));
while(isNaN(numero2)) {
  alert(`Por favor introduce un numero valido`);
    numero2 = parseInt(prompt(
        `Por favor introduce el segundo número para aplicarle un cálculo matemático`
      ));
}

resultadoSuma = `El resultado de tus valores introducidos como Suma es: ${
  (numero1 + numero2)
} `;

resultadoResta = `El resultado de tus valores introducidos como Resta es: ${
  numero1 - numero2
} `;

resultadoMultiplicacion = `El resultado de tus valores introducidos como Multiplicación es: ${
  numero1 * numero2
}  `;

resultadoDivision = `El resultado de tus valores introducidos como Division es: ${
  numero1 / numero2
} `;

document.write(`Los valores a calcular que introduciste fueron "${numero1}" como primer valor y "${numero2}" como segundo valor`);
document.write(`<br> ${resultadoSuma}`);
document.write(`<br> ${resultadoResta}`);
document.write(`<br> ${resultadoMultiplicacion}`);
document.write(`<br> ${resultadoDivision}`);

