// Variables
let nombreCliente;
let relleno;
let cobertura;





// Saludo al cliente
function ingresarNombre() {
    nombreCliente = prompt ("Ingrese su nombre").toLowerCase();
}
ingresarNombre();

alert("Bienvenido/a "+ nombreCliente + " a La Alfajorera");

// Tipos de Alfajores

const alfajores = [
    {id:1, nombre:"Alfajor de Chocolate Negro, relleno de Dulce de Leche", precio:300},
    {id:2, nombre:"Alfajor de Chocolate Negro, relleno con Nutella", precio:350},
    {id:3, nombre:"Alfajor de Chocolate Blanco, relleno de Dulce de Leche", precio:300},
    {id:4, nombre:"Alfajor de Chocolate Blanco, relleno con Nutella", precio:350},
    {id:5, nombre:"Alfajor de Maicena con Dulce de Leche", precio:250},
];

let carritoDeCompras = []

alert ("Le muestro los increibles alfajores artesanales que producimos!")

let listaDeAlfajores = alfajores.map((alfajor) => alfajor.id + "" + alfajor.nombre + "" + alfajor.precio + "$");
alert (listaDeAlfajores.join ("/"))

let precio = 0


    do{
        gusto = prompt ("Por favor ingrese que gusto de alfajor desea llevar. Indiquelo con el número correspondiente, siendo  1. Chocolate Negro + Dulce de leche 2. Chocolate Negro + Nutella 3. Chocolate Blanco + Dulce de Leche 4. Chocolate Blanco + nutella 5. Maicena")
    if(parseInt(gusto === 1)){
    alert ( nombreCliente + " elegiste Alfajor de Chocolate Negro con Dulce de Leche");
    precio = 300;
    }else if(parseInt(gusto === 2)){
    alert ( nombreCliente + " elegiste Alfajor de Chocolate Negro con Nutella");
    precio = 350;
    }else if(parseInt(gusto === 3)){
    alert ( nombreCliente + " elegiste Alfajor de Chocolate Blanco con Dulce de Leche");
    precio = 300;
    }else if(parseInt(gusto === 4)){
    alert ( nombreCliente + " elegiste Alfajor de Chocolate Blanco con Nutella");
    precio = 350;
    }else (parseInt(gusto === 5))
    alert ( nombreCliente + " elegiste Alfajor de Maicena con Dulce de Leche");
    precio = 250;   
    }while (parseInt (gusto > 6))
    alert ("no contamos con ese gusto por el momento.");


let cantidad = parseInt (prompt ( "Qué cantidad le gustaría llevar?"));

carritoDeCompras.push ({gusto, cantidad, precio})
alert (carritoDeCompras)
