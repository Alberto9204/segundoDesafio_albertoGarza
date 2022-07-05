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
 // La info de planes y telefonos los hice array para mejor funcionamiento del codigo
function mensajes(){
const telefonos = ["1.Iphone 13 $13,000\n","2.Samsung Galaxy S22 $12,000\n","3.HUAWEI Mate 40 pro $ 10,000"];
const planes = ["Plan 1: costo $100/mes\n-100 Minutos \n-100 Mensajes de texto \n-100 MB para que naveges por internet \n", "Plan 2: costo $200/mes\n-200 Minutos \n-200 Mensajes de texto \n-200 MB para que naveges por internet \n","Plan 3: costo $300/mes\n-300 Minutos \n-300 Mensajes de texto \n-300 MB para que naveges por internet"];   
alert("Estos son los telefonos que podemos mostrate con sus costos " + inicio + "\n" + telefonos);    
alert("A continuacion te mostraremos los diferentes planes y sus costos");
alert(planes);
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


  //agrege este Array para utilizar la funcion de push
const nombreCliente = [];
nombreCliente.push(inicio);
console.log (nombreCliente);


//objetos que seria mis celulares tendria la marca, modelo, y precio.
class celulares{
   constructor (marca, modelo, precio){
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
   }
}

const telefonos =[
   { id: 1, marca: "Iphone", modelo: "13", precio: "13,000" },
   { id: 2, marca: "Samsung", modelo: "Galaxy S22", precio: "12,000" },
   { id: 3, marca: "HUAEAI", modelo: "Mate 40 pro", precio: "10,000"},
];

class planes{
   constructor(plan, costo, minutos, megas){
      this.plan = plan;
      this.costo = costo;
      this.minutos = minutos;
      this.megas = megas;
   }
}

const plane =[
   { id:1, plan:1, costo: "$100", minutos: 100, megas: 100},
   { id:2, plan:2, costo: "$200", minutos: 200, megas: 200},
   { id:3, plan:3, costo: "$300", minutos: 300, megas: 300},
];

//Mi interraccion con el dom 
let primerPlan = document.getElementById("primerPlan");
primerPlan.innerHTML = "100 Minutos \n-100 Mensajes de texto \n-100 MB para que naveges por internet";

let segundoPlan = document.getElementById("segundoPlan");
segundoPlan.innerHTML = "200 Minutos \n-200 Mensajes de texto \n-200 MB para que naveges por internet \n";

let tercerPlan = document.getElementById("tercerPlan");
tercerPlan.innerHTML = "300 Minutos \n-300 Mensajes de texto \n-300 MB para que naveges por internet";

let costoPlan1 = document.getElementById("costoPlan1");
costoPlan1.innerHTML = "Costo $100/mes";

let costoPlan2 = document.getElementById("costoPlan2");
costoPlan2.innerHTML = "Costo $200/mes";

let costoPlan3 = document.getElementById("costoPlan3");
costoPlan3.innerHTML = "Costo $300/mes";