//Tenemos que crear un programa que solo deje pasar a los mayores de edad
//Despues de las 2am el primero sera su entrada gratis
let gratis = false;
function maquinaPermiso(tiempo) {
  let edad = prompt(`Por favor introduce tu edad`);
  if (edad >= 18) {
    if (edad >= 18 && tiempo >= 2 && tiempo < 7 && gratis == false) {
      alert(`Son las ${tiempo}:00Hs, puedes pasar gratis por que eres la primer persona en llegar después de las 2AM, ¡bienvenido!`);
     gratis = true;
    } else {
      alert(`Son las ${tiempo}:00Hs Puedes pasar, son $250`);
    }
  } else {
    alert(`Lo sentimos no puedes pasar, tu edad no es suficiente`);
  }
}
maquinaPermiso(20);
maquinaPermiso(2);
maquinaPermiso(2);
maquinaPermiso(5);
