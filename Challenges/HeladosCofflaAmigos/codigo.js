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
let dineroCoffla = prompt(`Con cuanto dinero cuentas Coffla`);

if (dineroCoffla >=0.6 && dineroCoffla<1) {
    alert(`Coffla, comprate el Helado de agua`)
    alert(`Coffla, y te sobra ${dineroCoffla -0.6 }`)
}
else if (dineroCoffla >=1 && dineroCoffla<1.6) {
    alert(`Coffla, comprate el Helado de crema`)
    alert(`Coffla, y te sobra ${dineroCoffla -1 }`)
}
else if (dineroCoffla >=1.6 && dineroCoffla<1.7) {
    alert(`Coffla, comprate el Helado de marca Heladix`)
    alert(`Coffla, y te sobra ${dineroCoffla -1.6 }`)
}
else if (dineroCoffla >=1.7 && dineroCoffla<1.8) {
    alert(`Coffla, comprate el Helado de marca Heladovich`)
    alert(`Coffla, y te sobra ${dineroCoffla -1.7 }`)
}
else if (dineroCoffla >=1.8 && dineroCoffla<2.9) {
    alert(`Coffla, comprate el Helado de marca Heraldo`)
    alert(`Coffla, y te sobra ${dineroCoffla -1.8 }`)
}
else if (dineroCoffla >=2.9) {
    alert(`Coffla, comprate el potecito de helado con confites, o el pote de 1/4 KG`)
    alert(`Coffla, y te sobra ${dineroCoffla -2.9 }`)
}
else{
    alert(`Lo sentimos no cuentas con el dinero suficiente para poder comprar un helado`)
}

//Roberto
let dineroRoberto = prompt(`Con cuanto dinero cuentas Roberto`);
dineroRoberto = parseInt(dineroRoberto);

if (dineroRoberto >=0.6 && dineroRoberto<1) {
    alert(`Roberto, comprate el Helado de agua`)
    alert(`Roberto, y te sobra ${dineroRoberto -0.6 }`)
}
else if (dineroRoberto >=1 && dineroRoberto<1.6) {
    alert(`Roberto, comprate el Helado de crema`)
    alert(`Roberto, y te sobra ${dineroRoberto -1 }`)
}
else if (dineroRoberto >=1.6 && dineroRoberto<1.7) {
    alert(`Roberto, comprate el Helado de marca Heladix`)
    alert(`Roberto, y te sobra ${dineroRoberto -1.6 }`)
}
else if (dineroRoberto >=1.7 && dineroRoberto<1.8) {
    alert(`Roberto, comprate el Helado de marca Heladovich`)
    alert(`Roberto, y te sobra ${dineroRoberto -1.7 }`)
}
else if (dineroRoberto >=1.8 && dineroRoberto<2.9) {
    alert(`Roberto, comprate el Helado de marca Heraldo`)
    alert(`Roberto, y te sobra ${dineroRoberto -1.8 }`)
}
else if (dineroRoberto >=2.9) {
    alert(`Roberto, comprate el potecito de helado con confites, o el pote de 1/4 KG`)
    alert(`Roberto, y te sobra ${dineroRoberto -2.9 }`)
}
else{
    alert(`Lo sentimos no cuentas con el dinero suficiente para poder comprar un helado`)
}

//Pedro
let dineroPedro = prompt(`Con cuanto dinero cuentas Pedro`);
dineroPedro = parseInt(dineroPedro);

if (dineroPedro >=0.6 && dineroPedro<1) {
    alert(`Pedro, comprate el Helado de agua`)
    // alert(`Pedro, y te sobra ${Math.round(dineroPedro -0.6)}`)
}
else if (dineroPedro >=1 && dineroPedro<1.6) {
    alert(`Pedro, comprate el Helado de crema`)
    alert(`Pedro, y te sobra ${dineroPedro -1 }`)
}
else if (dineroPedro >=1.6 && dineroPedro<1.7) {
    alert(`Pedro, comprate el Helado de marca Heladix`)
    alert(`Pedro, y te sobra ${dineroPedro -1.6 }`)
}
else if (dineroPedro >=1.7 && dineroPedro<1.8) {
    alert(`Pedro, comprate el Helado de marca Heladovich`)
    alert(`Pedro, y te sobra ${dineroPedro -1.7 }`)
}
else if (dineroPedro >=1.8 && dineroPedro<2.9) {
    alert(`Pedro, comprate el Helado de marca Heraldo`)
    alert(`Pedro, y te sobra ${dineroPedro -1.8 }`)
}
else if (dineroPedro >=2.9) {
    alert(`Pedro, comprate el potecito de helado con confites, o el pote de 1/4 KG`)
    alert(`Pedro, y te sobra ${dineroPedro -2.9 }`)
}
else{
    alert(`Lo sentimos no cuentas con el dinero suficiente para poder comprar un helado`)
}