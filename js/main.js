class Producto {
  constructor(entrada) {
    this.precio = parseFloat(entrada.precio);
    this.cantidad = parseInt(entrada.cantidad);
  }
  calcularPrecioConIva() {
    return this.cantidad * this.precio * 1.21;
  }
}

let precio;
let cantidad; 
const carritoDeCompras = [];
do {
  precio = prompt("ingrese el precio del producto. Para finalizar ingrese FIN");
  IF (precio !== "FIN") {
    cantidad = prompt("ingrese la cantidad a comprar");
    const producto = new Producto({ precio: precio, cantidad: cantidad});
  }
} while(precio !== "FIN");

let total = 0;
for(const producto of carritoDeCompras) {
  total = total + producto.calcularPrecioConIva();
}
alert("el total del carrito es: " + total);