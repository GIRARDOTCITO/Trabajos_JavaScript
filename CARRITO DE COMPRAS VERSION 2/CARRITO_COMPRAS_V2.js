

// Juan Sebastian Girardot Antonio
// Carrito de compras: 
class ProductoTienda {
     #codigoProducto;
     #nombreProducto;
     #inventarioProducto;
     #precioProducto;
//Se crea cada una de las variables, que usaremos en el codigo, y las encapsulamos.
     constructor(){
          this.#codigoProducto = '';
          this.#nombreProducto = '';
          this.#inventarioProducto = 0;
          this.#precioProducto = 0.0;
     }
     // le damos valores a cada una de las variables.
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
     //añadimos al arreglo "#carga productos", el cual contiene los valores de los productos.
     getDatosProductosCargados() {
          return this.#cargaProductos;
     }
     cargaManualProducto(){
          let dato = "";
          //let respuesta = confirm('¿Desea digitar un nuevo producto?');
          while (confirm('¿Desea ingresar un nuevo producto?')){
               let sw = true;
               let producto = new ProductoTienda();
               do{
                    do{
                    dato = this.datosProducto("Digite Codigo del Producto: ");
                    //sw = this.verificarCodigoProducto(dato);
                    }while(isNaN(dato) || dato<1 );
               } while (this.verificarCodigoProducto(dato));
               producto.setCodigoProducto = dato.toUpperCase();
               do{
                    dato = this.datosProducto("Digite el nombre del Producto : ");
               } while (this.verificarNombreProducto(dato.toUpperCase()));
               producto.setNombreProducto = dato.toUpperCase();
               do{
               producto.setInventarioProducto = Number(this.datosProducto("Digite cantidad del producto :"));
               }while(isNaN(producto.getInventarioProducto) || producto.getInventarioProducto<1);
               do{
               producto.setPrecioProducto = Number(this.datosProducto("Digite el Precio del Producto : "));
               }while(isNaN(producto.getPrecioProducto) || producto.getPrecioProducto<1);
               this.#cargaProductos.push(producto);
               //respuesta = confirm('¿Desea grabar un nuevo producto?');
               //Validamos datos y asignamos a cada uno un mensaje en el cual va  grabar dichos productos
          }
     }

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
          console.log ("| CODIGO | PRODUCTO | CANTIDAD | PRECIO UNITARIO |");
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
     //Asignamos valores a cada una de las variables encapsuladas
     calculaValorCompra() {
          return this.#cantidadCompra * this.#precioCompra;
     }
     //realizamos la multiplicacion
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
               valor = prompt("Digite Codigo Producto:  ");
               try {
                    datosProductos.forEach((objeto, index) => {
                         if (objeto.getCodigoProducto === valor && objeto.getInventarioProducto > 0){
                              this.setCantidadCompra = objeto.getInventarioProducto  ;
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
                    confirm("Codigo no existe. ¡Verifique! ");
               }
          } while (sw); 
          return valor;
     }
     //La declaracion, "try...catch", señala un bloque de instrucciones a intentar, y especifica una respuesta si se produce una excepcion "BreakException."
//La sentencia throw se utiliza para lanzar una excepcion, y especifica su valor. 
     datoCantidadProducto (datosProductos){
          let sw = true;
          let valor = "";
          let valid ="";
          let BreakException = {};
          do {   
               valor = Number(prompt("Digite Número de unidades: "));
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
                    console.log ("Cantidad digitada excede las existencias o el codigo no existe ¡Verifique!");
               };
               //La declaracion, "try...catch", señala un bloque de instrucciones a intentar, y especifica una respuesta si se produce una excepcion "BreakException."
//La sentencia throw se utiliza para lanzar una excepcion, y especifica su valor. 
          } while (sw);
          return valor;
     }
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
     //cargamos cada uno de los valores que estan dentro de la funcion "datocodigoproducto"
     mostrarCompra(carrito){
          let i=0;
          let compra = 0;
          console.log ("                                   FACTURA DE VENTA - TIENDA ONLINE");
          console.log ("|       PRODUCTO     |   CANTIDAD  |   PRECIO UNITARIO   |   SUBTOTAL   |");
          carrito.forEach(objeto => {
               compra += objeto.calculaValorCompra();
               console.log("|      " + objeto.getProductoCompra + "      |       " + objeto.getCantidadCompra + "     | " +
               objeto.getPrecioCompra.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "  |  "  + (objeto.calculaValorCompra().toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))+"   | ");
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
//iniciamos los valores de numeros y lo guardamos en el arreglo "productos carrito"
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
// let respuesta = true;
let nombre = '';
let productosTienda = new GestionarProductosTienda();
// productosTienda.cargaArchivoProductos();
productosTienda.cargaManualProducto();
//console.log(productosTienda.getDatosProductosCargados());
productosTienda.getDatosProductosCargados();
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
     //validamos el nombre que de tal manera aparezca deacuerdo a lo que el cliente eliga
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


























































































































































































































































