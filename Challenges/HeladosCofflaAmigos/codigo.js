//1.54
/*
Roberto Tiene 1.5 USD
Pedro Tiene 1.7 USD
Coffla Tiene 3 USD

Los precios de los helados son los siguentes:
Palito de helado de agua: $0.6 USD
Palito de helado de crema: $1 USD
Bombón de Helado marca heladix: $1.6 USD
Bombón de Helado marca heladovich: $1.7 USD
Bombón de Helado marca helardo: $1.8 USD 
Potecito de Helado con confites: $ 2.9 USD
Pote de 1/4 KG -> $2.9 USD
*/

//Coffla
let dineroCoffla = prompt(`Por favor introduce cuanto dinero tienes Coffla`);
while (isNaN(dineroCoffla || dineroCoffla == "")) {
  alert(`Por favor introduce un numero como valor`);
  dineroCoffla = prompt(`Por favor introduce cuanto dinero tienes Coffla`);
}
while (dineroCoffla == "") {
  alert(`Por favor introduce un numero como valor`);
  dineroCoffla = prompt(`Por favor introduce cuanto dinero tienes Coffla`);
}
if (dineroCoffla >= 0.6 && dineroCoffla < 1) {
  alert(
    `Coffla, con ${dineroCoffla} USD, te alcanza para el helado de agua que tiene un costo de: $0.6 USD`
  );
  alert(
    `De tus ${dineroCoffla} USD te restan: ${
      Number(dineroCoffla) - 0.6
    }USD, tu helado costó: $0.6 USD`
  );
} else if (dineroCoffla >= 1 && dineroCoffla < 1.6) {
  alert(
    `Coffla, con ${dineroCoffla} USD, te alcanza para el helado de crema que tiene un costo de: $1 USD`
  );
  alert(
    `De tus ${dineroCoffla} USD te restan: ${
      Number(dineroCoffla) - 1
    }USD, tu helado costó: $1 USD`
  );
} else if (dineroCoffla >= 1.6 && dineroCoffla < 1.7) {
  alert(
    `Coffla, con ${dineroCoffla} USD, te alcanza para el helado de heladix que tiene un costo de: $1.6 USD`
  );
  alert(
    `De tus ${dineroCoffla} USD te restan: ${
      Number(dineroCoffla) - 1.6
    }USD, tu helado costó: $1.6 USD`
  );
} else if (dineroCoffla >= 1.7 && dineroCoffla < 1.8) {
  alert(
    `Coffla, con ${dineroCoffla} USD, te alcanza para el helado de heladovich que tiene un costo de: $1.7 USD `
  );
  alert(
    `De tus ${dineroCoffla} USD te restan: ${
      Number(dineroCoffla) - 1.7
    }USD, tu helado costó: $1.7 USD`
  );
} else if (dineroCoffla >= 1.8 && dineroCoffla < 2.9) {
  alert(
    `Coffla, con ${dineroCoffla} USD, te alcanza para el helado de heraldo que tiene un costo de: $1.8 USD`
  );
  alert(
    `De tus ${dineroCoffla} USD te restan: ${
      Number(dineroCoffla) - 1.8
    }USD, tu helado costó: $1.8 USD`
  );
} else if (dineroCoffla >= 2.9) {
  alert(
    `Coffla, con ${dineroCoffla} USD, te alcanza para el helado con confites o el pote de 1/4KG que tiene un costo de: $2.9 USD`
  );
  alert(
    `De tus ${dineroCoffla} USD te restan: ${
      Number(dineroCoffla) - 2.9
    }USD, tu helado costó: $2.9 USD`
  );
} else {
  alert(
    `Lo sentimos, no cuentas con el dinero suficiente para poder comprar :(`
  );
}

//Pedro
let dineroPedro = prompt(`Por favor introduce cuanto dinero tienes Pedro`);
while (isNaN(dineroPedro || dineroPedro == "")) {
  alert(`Por favor introduce un numero como valor`);
  dineroPedro = prompt(`Por favor introduce cuanto dinero tienes Pedro`);
}
while (dineroPedro == "") {
  alert(`Por favor introduce un numero como valor`);
  dineroPedro = prompt(`Por favor introduce cuanto dinero tienes Pedro`);
}
if (dineroPedro >= 0.6 && dineroPedro < 1) {
  alert(
    `Pedro, con ${dineroPedro} USD, te alcanza para el helado de agua que tiene un costo de: $0.6 USD`
  );
  alert(
    `De tus ${dineroPedro} USD te restan: ${
      Number(dineroPedro) - 0.6
    }USD, tu helado costó: $0.6 USD`
  );
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  alert(
    `Pedro, con ${dineroPedro} USD, te alcanza para el helado de crema que tiene un costo de: $1 USD`
  );
  alert(
    `De tus ${dineroPedro} USD te restan: ${
      Number(dineroPedro) - 1
    }USD, tu helado costó: $1 USD`
  );
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  alert(
    `Pedro, con ${dineroPedro} USD, te alcanza para el helado de heladix que tiene un costo de: $1.6 USD`
  );
  alert(
    `De tus ${dineroPedro} USD te restan: ${
      Number(dineroPedro) - 1.6
    }USD, tu helado costó: $1.6 USD`
  );
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  alert(
    `Pedro, con ${dineroPedro} USD, te alcanza para el helado de heladovich que tiene un costo de: $1.7 USD `
  );
  alert(
    `De tus ${dineroPedro} USD te restan: ${
      Number(dineroPedro) - 1.7
    }USD, tu helado costó: $1.7 USD`
  );
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert(
    `Pedro, con ${dineroPedro} USD, te alcanza para el helado de heraldo que tiene un costo de: $1.8 USD`
  );
  alert(
    `De tus ${dineroPedro} USD te restan: ${
      Number(dineroPedro) - 1.8
    }USD, tu helado costó: $1.8 USD`
  );
} else if (dineroPedro >= 2.9) {
  alert(
    `Pedro, con ${dineroPedro} USD, te alcanza para el helado con confites o el pote de 1/4KG que tiene un costo de: $2.9 USD`
  );
  alert(
    `De tus ${dineroPedro} USD te restan: ${
      Number(dineroPedro) - 2.9
    }USD, tu helado costó: $2.9 USD`
  );
} else {
  alert(
    `Lo sentimos, no cuentas con el dinero suficiente para poder comprar :(`
  );
}

//Roberto
let dineroRoberto = prompt(`Por favor introduce cuanto dinero tienes Roberto`);
while (isNaN(dineroRoberto || dineroRoberto == "")) {
  alert(`Por favor introduce un numero como valor`);
  dineroRoberto = prompt(`Por favor introduce cuanto dinero tienes Roberto`);
}
while (dineroRoberto == "") {
  alert(`Por favor introduce un numero como valor`);
  dineroRoberto = prompt(`Por favor introduce cuanto dinero tienes Roberto`);
}
if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  alert(
    `Roberto, con ${dineroRoberto} USD, te alcanza para el helado de agua que tiene un costo de: $0.6 USD`
  );
  alert(
    `De tus ${dineroRoberto} USD te restan: ${
      Number(dineroRoberto) - 0.6
    }USD, tu helado costó: $0.6 USD`
  );
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  alert(
    `Roberto, con ${dineroRoberto} USD, te alcanza para el helado de crema que tiene un costo de: $1 USD`
  );
  alert(
    `De tus ${dineroRoberto} USD te restan: ${
      Number(dineroRoberto) - 1
    }USD, tu helado costó: $1 USD`
  );
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  alert(
    `Roberto, con ${dineroRoberto} USD, te alcanza para el helado de heladix que tiene un costo de: $1.6 USD`
  );
  alert(
    `De tus ${dineroRoberto} USD te restan: ${
      Number(dineroRoberto) - 1.6
    }USD, tu helado costó: $1.6 USD`
  );
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  alert(
    `Roberto, con ${dineroRoberto} USD, te alcanza para el helado de heladovich que tiene un costo de: $1.7 USD `
  );
  alert(
    `De tus ${dineroRoberto} USD te restan: ${
      Number(dineroRoberto) - 1.7
    }USD, tu helado costó: $1.7 USD`
  );
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  alert(
    `Roberto, con ${dineroRoberto} USD, te alcanza para el helado de heraldo que tiene un costo de: $1.8 USD`
  );
  alert(
    `De tus ${dineroRoberto} USD te restan: ${
      Number(dineroRoberto) - 1.8
    }USD, tu helado costó: $1.8 USD`
  );
} else if (dineroRoberto >= 2.9) {
  alert(
    `Roberto, con ${dineroRoberto} USD, te alcanza para el helado con confites o el pote de 1/4KG que tiene un costo de: $2.9 USD`
  );
  alert(
    `De tus ${dineroRoberto} USD te restan: ${
      Number(dineroRoberto) - 2.9
    }USD, tu helado costó: $2.9 USD`
  );
} else {
  alert(
    `Lo sentimos, no cuentas con el dinero suficiente para poder comprar :(`
  );
}
