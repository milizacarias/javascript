const IVA = 21;
function calcularIva(precioSinIva) {
  return precioSinIva + (precioSinIva * IVA) / 100;
}

let precioProducto;
do {
  precioProductoIngresado = prompt(
    "ingrese precio de producto, para terminar ingrese STOP"
  );
  const precioProducto = parseFloat(precioProductoIngresado);
  if (precioProducto > 0) {
    alert("el precio con IVA es: " + calcularIva(precioProducto));
  }
} while (precioProductoIngresado !== "STOP");
