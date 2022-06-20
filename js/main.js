//Telefonia Sayayin
// Se elabora el desafio para una telefonia celular donde el cliente escogera su equipo y su plan mensual y se le dira cuanto tendra que pagar inicialmente y sus mensualidad.

//Declaramos variables y funciones.
let inicio = nombre();
let saludo = mostrarSaludo();
let productos = mensajes();
let celpaq = paquete();

//Se usa un while por si no pone nada en nombre.
function nombre() {
    (alert("Bienvenido a telefonia Sayayin"));
    let cliente = prompt("Bienvenido a telefonia Sayayin Ingrese su nombre y apellido");
    while (cliente === ""){
        cliente = prompt("Ingrese su nombre y apellido");
    };
    return cliente;
}
//Se usa un while por si no escoge el "1" como opcion.
function mostrarSaludo() {
     let seleccion = (parseInt(prompt("Hola " + inicio + "," + " ¿Estas listo para escoger tu equipo?" + "\n 1.SI  2.NO")));
     while (seleccion !== 1){
        alert ("Adios " + inicio);  
        return (nombre());
      }
 }

 //mostramos info al cliente de nuestros paquetes y celulares
function mensajes(){
alert("Estos son los telefonos que podemos mostrate con sus costos " + inicio + "\n 1.Iphone 13 $13,000 \n 2.Samsung Galaxy S22 $ 12,000 \n 3.HUAWEI Mate 40 pro $ 10,000 ");    
alert("A continuacion te mostraremos los diferentes planes y sus costos");
alert("Plan 1: costo $100/mes\n-100 Minutos \n-100 Mensajes de texto \n-100 MB para que naveges por internet");
alert("Plan 2: costo $200/mes\n-200 Minutos \n-200 Mensajes de texto \n-200 MB para que naveges por internet");
alert("Plan 3: costo $300/mes\n-300 Minutos \n-300 Mensajes de texto \n-300 MB para que naveges por internet");
 }


 //pedimos la introduzca las opciones que le gustaron y se muestran los datos finales
function paquete(){
let plan = parseInt(prompt("¿Que plan es el que te gusto?\n1 ,2 o 3"));
let celular = parseInt(prompt("¿Que celular es el que te gusto?\n1.Iphone 13 \n 2.Samsung Galaxy \n 3.HUAWEI Mate 40 pro"))
let iphone = 13000
let samsung = 12000
let huawei = 10000
let plan1 = 100
let plan2 = 200
let plan3 = 300

    if (celular === 1 && plan === 1){
       alert("Usted escogio el Iphone 13 y el plan 1");
       alert("Su primer pago seria de $" + (iphone + plan1) + "\n 11 mensualidades de $" + plan1);
       alert("Hasta la proxima guerrero Sayayin");
    }
    else if (celular === 1 && plan === 2){
        alert("Usted escogio el Iphone 13 y el plan 2");
        alert("Su primer pago seria de $" + (iphone + plan2) + "\n 11 mensualidades de $" + plan2);
       alert("Hasta la proxima guerrero Sayayin");
    }
    else if (celular === 1 && plan === 3){
        alert("Usted escogio el Iphone 13 y el plan 3");
        alert("Su primer pago seria de $" + (iphone + plan3) + "\n 11 mensualidades de $" + plan3);
       alert("Hasta la proxima guerrero Sayayin");
    }
    else if (celular === 2 && plan === 1){
        alert("Usted escogio el Samsung Galaxy S22 y el plan 1");
        alert("Su primer pago seria de $" + (samsung + plan1) + "\n 11 mensualidades de $" + plan2);
       alert("Hasta la proxima guerrero Sayayin");
    }
    else if (celular === 2 && plan === 2){
       alert("Usted escogio el Samsung Galaxy S22 y el plan 2");
       alert("Su primer pago seria de $" + (samsung + plan2) + "\n 11 mensualidades de $" + plan2);
       alert("Hasta la proxima guerrero Sayayin");
    }
    else if (celular === 2 && plan === 3){
         alert("Usted escogio el Samsung Galaxy S22 y el plan 3");
         alert("Su primer pago seria de $" + (samsung + plan3) + "\n 11 mensualidades de $" + plan3);
       alert("Hasta la proxima guerrero Sayayin");
    }
    else if (celular === 3 && plan === 1){
         alert("Usted escogio el HUAWEI Mate 40 pro y el plan 1");
         alert("Su primer pago seria de $" + (huawei + plan1) + "\n 11 mensualidades de $" + plan1);
       alert("Hasta la proxima guerrero Sayayin");
    }
    else if (celular === 3 && plan === 2){
        alert("Usted escogio el HUAWEI Mate 40 pro y el plan 2");
        alert("Su primer pago seria de $" + (huawei + plan2) + "\n 11 mensualidades de $" + plan2);
       alert("Hasta la proxima guerrero Sayayin");
    }
    else if(celular === 3 && plan === 3){
         alert("Usted escogio el HUAWEI Mate 40 pro y el plan 3");
         alert("Su primer pago seria de $" + (huawei + plan3) + "\n 11 mensualidades de $" + plan3);
       alert("Hasta la proxima guerrero Sayayin");
    }
  }