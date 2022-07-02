// Juan Sebastian Girardot Antonio
//Carrito de compras: 
import datosArchivo from './datos.json' assert { type: 'json' };
// Clase que gestiona cada uno de los productos que se tienen para la venta
class ProductoTienda {
     #codigoProducto;
     #nombreProducto;
     #inventarioProducto;
     #precioProducto;
//Se crea cada una de las variables, que tenemos para iniciar nuestro programa y perdir los datos al dueño del almacen
     constructor(){
          this.#codigoProducto = '';
          this.#nombreProducto = '';
          this.#inventarioProducto = 0;
          this.#precioProducto = 0.0;
     }
     //le damos valor a cada uno de los productos
     get getCodigoProducto() {
          return this.#codigoProducto;
     }
     set setCodigoProducto(value) {
          this.#codigoProducto = value;
     }
     get getNombreProducto() {
          return this.#nombreProducto;
     }
     set setNombreProducto(value) {
          this.#nombreProducto = value;
     }
     get getInventarioProducto() {
          return this.#inventarioProducto;
     }
     set setInventarioProducto(value) {
          this.#inventarioProducto = value;
     }
     get getPrecioProducto() {
          return this.#precioProducto;
     }
     set setPrecioProducto(value) {
          this.#precioProducto = value;
     }
}
//Se declaran variables, las cuales son getter y setter, que nos ayudan a dar valores a nuestros objetos y a mirar que valor tiene cada variable.
//Clase que gestiona los productos que se tienen para la venta en la tienda
class GestionarProductosTienda {
     #cargaProductos;
     constructor(){
          this.#cargaProductos = [];
     }
          //añadimos al arreglo "#carga productos",que esta dentro de la clase GestionarProductosTienda el cual contiene los valores de los productos.
     getDatosProductosCargados() {
          return this.#cargaProductos;
     }
     cargaManualProducto(){
          let dato = "";
          //let respuesta = confirm('¿Desea digitar un nuevo producto?');
          while (confirm('¿Desea digitar un nuevo producto?')){
               let sw = true;
               let producto = new ProductoTienda();
               do{
                    do{
                    dato = this.datosProducto("Digite Codigo del Producto ==> ");
                    //sw = this.verificarCodigoProducto(dato);
                    }while(dato =='' || dato==' ' ||isNaN(dato));
               } while (this.verificarCodigoProducto(dato));
               producto.setCodigoProducto = dato.toUpperCase();
               do{       
                    do{
                    dato = this.datosProducto("Digite Nombre del Producto ==> ");
                    }while( dato =='' || dato==' ' );
               } while (this.verificarNombreProducto(dato.toUpperCase()));
               producto.setNombreProducto = dato.toUpperCase();
               do{
               producto.setInventarioProducto = Number(this.datosProducto("Digite Inventario del Producto ==> "));
               }while(isNaN(producto.getInventarioProducto) || producto.getInventarioProducto<1);
               do{
               producto.setPrecioProducto = Number(this.datosProducto("Digite Precio del Producto ==> "));
               }while(isNaN(producto.getPrecioProducto) || producto.getPrecioProducto<1);
               this.#cargaProductos.push(producto);
               //respuesta = confirm('¿Desea grabar un nuevo producto?');
           //Validamos datos y asignamos a cada uno un mensaje en el cual va  grabar dichos productos
          }

     }
//Se define una variable dato, y le pedimos al usuario que digite el codigo del producto que desea agregar a la tienda.
//Se validan datos y se piden valores tales como el inventario y el precio de los productos lo almacenamos en una variable llamada "cargaproductos", y guardamos sus datos.
     cargaArchivoProductos(){
          let i=0;
          if (datosArchivo.length > 0){
               datosArchivo.forEach(objeto => {
                    i++;
                    let producto = new ProductoTienda();
                    producto.setCodigoProducto = objeto.codigoProducto.toUpperCase();
                    producto.setNombreProducto = objeto.nombreProducto.toUpperCase();
                    producto.setInventarioProducto = objeto.inventarioProducto;
                    producto.setPrecioProducto = objeto.precioProducto; 
                    this.#cargaProductos.push(producto);
               });  
          };
          console.log("Total de productos cargados ==> " + i); 
     }
//toUpperCase: es un metodo que devuelve los valores "string", en mayusculas.
//La Funcion "Flecha", es una alternativa compacta a una expresión de funcion tradicional. No tuiene sus propios enlaces a this o super y no se de usar como metodos. No tiene argumentos ni palabras clave. Se utilizan para hacer que el codigo sea mas corto. Las funciones flecha buscan variables.
     almacenaProductos(datosClase){
          //console.log(datosClase);
          localStorage.setItem("productosTienda",JSON.stringify(datosClase));
          let datosJson = localStorage.getItem("productosTienda");
          //console.log(JSON.parse(datosJson));
      }
//El metodo "localStorage.setItem", establece el valor del objeto de almacentamiento especificado.
     datosProducto(mensaje){
          let valor = prompt(mensaje);
          return valor;
     }
     verificarCodigoProducto(codigo){
          let sw = false;
          let BreakException = {};
          if (this.#cargaProductos.length > 0){
               try {
                    this.#cargaProductos.forEach(objeto => {
                         if (objeto.getCodigoProducto === codigo){
                              sw = true;
                              throw BreakException;
                         };
                    });
               } catch (e) {
                    if (e !== BreakException) throw e;
               };
          } else{
               sw = false;
          }
          return sw;
     }
//La declaracion, "try...catch", señala un bloque de instrucciones a intentar, y especifica una respuesta si se produce una excepcion "BreakException."
//La sentencia throw se utiliza para lanzar una excepcion, y especifica su valor. 
     verificarNombreProducto(nombre){
          let sw = false;
          let BreakException = {};
          if (this.#cargaProductos.length > 0){
               try {
                    this.#cargaProductos.forEach(objeto => {
                         if (objeto.getNombreProducto === nombre){
                              sw = true;
                              throw BreakException;
                         };
                    })
               } catch (e) {
                    if ( e !== BreakException) throw e;
               };
          } else{
               sw = false;
          }
          return sw;
     }
     //La declaracion, "try...catch", señala un bloque de instrucciones a intentar, y especifica una respuesta si se produce una excepcion "BreakException."
//La sentencia throw se utiliza para lanzar una excepcion, y especifica su valor. 
 
     mostrarProductos(datosProductos){
          let i=0;
          console.log ("                                   PRODUCTOS DISPONIBLES - TIENDA ONLINE");
          console.log ("| CODIGO | PRODUCTO | INVENTARIO | P.V.P. |");
          datosProductos.forEach(producto => {
               console.log("|   " + producto.getCodigoProducto + "   | " + producto.getNombreProducto + " |      " +
               producto.getInventarioProducto + "     | " + (producto.getPrecioProducto).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + " | ");
          });
          console.log(" ");          
     }
     //creamos la tabla donde va a contener cada uno de  los productos y sus respectivos codigos
}
//clase que gestiona cada uno de los productos que el cliente tiene en el carrito de compras
class CompraProductoTienda {
     #clienteCompra;
     #productoCompra;
     #cantidadCompra;
     #precioCompra;
     //metodo constructor
     //creamos otra clase la cual nos muestra variables las cuales vamos a utilizar de tal manera que el cliente pueda escoger entre estas.
     constructor() {
          this.#clienteCompra = '';
          this.#productoCompra = '';
          this.#cantidadCompra = 0;
          this.#precioCompra = 0.0;
     }
     calculaValorCompra() {
          return this.#cantidadCompra * this.#precioCompra;
     }
     datosCompra(mensaje){
          let valor = prompt(mensaje);
          return valor;
     }
     //creamos "datoscompra", donde damos el valor mensaje
     datoCodigoProducto(datosProductos){
          let sw = true;
          let BreakException = {};
          let valor = "";
          do {
               valor = prompt("Digite Codigo Producto ==> ");
               try {
                    datosProductos.forEach((objeto, index) => {
                         if (objeto.getCodigoProducto === valor && objeto.getInventarioProducto > 0){
                              this.setCantidadCompra = objeto.getInventarioProducto;
                              this.setPrecioCompra = objeto.getPrecioProducto;
                              valor = objeto.getNombreProducto;
                              sw = false;
                              throw BreakException;
                         };
                    });
               } catch (e) {
                    if (e !== BreakException) throw e;
               };
               if (sw){
                    confirm("Codigo no existe. ¡Verifique!");
               }
          } while (sw); 
          return valor;
     }
     //La declaracion, "try...catch", señala un bloque de instrucciones a intentar, y especifica una respuesta si se produce una excepcion "BreakException."
//La sentencia throw se utiliza para lanzar una excepcion, y especifica su valor.
     datoCantidadProducto (datosProductos){
          let sw = true;
          let valor = "";
          let BreakException = {};
          do {
               do{
               valor = Number(prompt("Digite Número de unidades ==>"));
               }while(isNaN(valor) || valor < 1);
               if (valor <= this.getCantidadCompra && valor > 0 ){
                    this.setCantidadCompra = valor;
                    try {
                         datosProductos.forEach((objeto, index) => {
                              if (objeto.getNombreProducto === this.getProductoCompra && objeto.getInventarioProducto >0){
                                   objeto.setInventarioProducto = objeto.getInventarioProducto - this.getCantidadCompra;
                                   throw BreakException;
                              };
                         });
                    } catch (e) {
                         if (e !== BreakException) throw e;
                    };
                    sw = false;
               }else{
                    console.log ("Cantidad digitada excede las existencias. ¡Verifique!");
               };
          } while (sw);
          return valor;
     }
     //La declaracion, "try...catch", señala un bloque de instrucciones a intentar, y especifica una respuesta si se produce una excepcion "BreakException."
//La sentencia throw se utiliza para lanzar una excepcion, y especifica su valor.
     get getClienteCompra() {
          return this.#clienteCompra;
     }
     set setClienteCompra(value) {
          this.#clienteCompra = value;
     }
     get getProductoCompra() {
          return this.#productoCompra;
     }
     set setProductoCompra(value) {
          this.#productoCompra = value;
     }
     get getCantidadCompra() {
          return this.#cantidadCompra;
     }
     set setCantidadCompra(value) {
          this.#cantidadCompra = value;
     }
     get getPrecioCompra() {
          return this.#precioCompra;
     }
     set setPrecioCompra(value) {
          this.#precioCompra = value;
     }
}
//Inicializamos los valores de las variables con getter y setter
class CarritoCompra{
     #productosCarrito;
     constructor(){
          this.#productosCarrito = [];
     }
     nuevoProducto(nombre, datosProductos){
          let producto = new CompraProductoTienda();
          producto.setClienteCompra = nombre;
          producto.setProductoCompra = producto.datoCodigoProducto(datosProductos);
          producto.setCantidadCompra = producto.datoCantidadProducto(datosProductos);
          //producto.setPrecioCompra = producto.datoPrecioCompra();
          this.#productosCarrito.push(producto);
     }
     mostrarCompra(carrito){
          let i=0;
          let compra = 0;
          console.log ("                                   FACTURA DE VENTA - TIENDA ONLINE");
          console.log ("|       PRODUCTO     |   CANTIDAD  |   P.V.P.   |   SUBTOTAL   |");
          carrito.forEach(objeto => {
               compra += objeto.calculaValorCompra();
               console.log("|      " + objeto.getProductoCompra + "      |       " + objeto.getCantidadCompra + "     | " +
               objeto.getPrecioCompra.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "  |  " + (objeto.calculaValorCompra()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "   | ");
          });
          console.log("");  
          console.log("Valor Total de la Factura ==> ", (compra).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));     
          console.log("¡Gracias por su compra!");
     }
     //creamos la tabla la cual contiene las opciones del usuario
     get carritoCompra(){
          return this.#productosCarrito;
     }
     get numeroProductos(){
          return this.#productosCarrito.length;
     }
}
function setNombreCliente(){
     var name;
name=validdato("Digite su nombre")
function validdato(texto){
  do{
    let name=prompt(texto);
    if (name !=='' && name!==' '  && !(!/^[a-z-ñA-Z-Ñ ]*$/g.test(name)))
      return name;
  }while(true);
}
}
//Guardamos el nombre y los retornamos de tal manera que este en MAYUSCULAS
let sw = true;
let respuesta = true;
let nombre = '';
let productosTienda = new GestionarProductosTienda();
productosTienda.cargaArchivoProductos();
productosTienda.cargaManualProducto();
//console.log(productosTienda.getDatosProductosCargados());
productosTienda.almacenaProductos(productosTienda.getDatosProductosCargados());
let canasta = new CarritoCompra();
//Iniciamos el programa de tal manera que cargue nuestras funciones y clases.
while (confirm('¿Existe un nuevo Cliente?')){
     do{
          nombre = setNombreCliente();
         if (nombre === ""){
               sw = true;          
          } else {
               sw = false;
          };    
     } while (sw);  
     do{
          productosTienda.mostrarProductos(productosTienda.getDatosProductosCargados());
          canasta.nuevoProducto(nombre, productosTienda.getDatosProductosCargados());
      //iniciamos el arreglo "productos tienda", en el cual estan contenidos cada uno de las funciones que inician nuestro programa
     } while (confirm('¿Desea un nuevo producto?'));
     console.log(canasta.numeroProductos);
     console.log(canasta.carritoCompra);
     console.log('Nombre del Cliente ==> ' + canasta.carritoCompra[0].getClienteCompra);
     canasta.mostrarCompra(canasta.carritoCompra);
}

//mostramos cada uno de los valores tales como los arreglos funciones nombre y le pedimos al cliente que si desea un nuevo producto



