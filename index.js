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


// Gusto de los alfajores

    function sabores(){
    gusto = prompt ("Por favor ingrese que gusto de alfajor desea llevar. Indiquelo con el número correspondiente, siendo  1. Chocolate Negro + Dulce de leche 2. Chocolate Negro + Nutella 3. Chocolate Blanco + Dulce de Leche 4. Chocolate Blanco + nutella 5. Maicena")
    
    if(gusto == 1){
    alert ( nombreCliente + " elegiste Alfajor de Chocolate Negro con Dulce de Leche");
    precio = 300;
    }else if(gusto == 2){
    alert ( nombreCliente + " elegiste Alfajor de Chocolate Negro con Nutella");
    precio = 350;
    }else if(gusto == 3){
    alert ( nombreCliente + " elegiste Alfajor de Chocolate Blanco con Dulce de Leche");
    precio = 300;
    }else if(gusto == 4){
    alert ( nombreCliente + " elegiste Alfajor de Chocolate Blanco con Nutella");
    precio = 350;
    }else if (gusto == 5){
    alert ( nombreCliente + " elegiste Alfajor de Maicena con Dulce de Leche");
    precio = 250;   
    }else {
    alert ("no contamos con ese gusto por el momento.")
    sabores();
    }
    }
    sabores();

// Cantidad de Alfajores a comprar

    function unidades(){
        let cantidad = parseInt (prompt ( "Qué cantidad le gustaría llevar?"));
    }
    unidades();

carritoDeCompras.push ({gusto, unidades, precio})
console.log (carritoDeCompras)

// Le preguntamos al cliente si quiere comprar algo más

function suma(){
do{
    sumarMas = prompt ("Quiere probar otro gusto de Alfajor?")
    if(sumarMas == "si"){
        sabores();
        unidades();
        suma();
    }else if(sumarMas == "no"){
        alert("Que disfrute mucho de su elección!")
        carritoDeCompras.forEach ((carritoFinal) => {
            console.log(`alfajor: ${carritoFinal.gusto}, unidades: ${carritoFinal.cantidad}, total a pagar por producto ${carritoFinal.cantidad * carritoFinal.precio}`)
        })
        }else{
        alert("ingrese una opción válida: " + sumarMas + " no es una opción válida");
    }
}while (sumarMas !== "si" && sumarMas !== "no")
}
suma();

// Carrito Final
const total = carritoDeCompras.reduce ((acc, el) => acc + el.precio * el.cantidad, 0)
console.log(`el total a pagar por su compra es: ${total}`)
