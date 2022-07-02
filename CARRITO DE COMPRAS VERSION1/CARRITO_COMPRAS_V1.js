//Nombre: Juan Sebastian Girardot Antonio
//Centro de Biotecnologia Agropecuaria Sena - Mosquera
//En este codigo podemos observar que primero pedimos el nombre del cliente y le mostramos los productos de nuestro carrito de compras.
var name;
name=validdato("Digite su nombre")
function validdato(texto){
  do{
    let name=prompt(texto);
    if (name !=='' && name!==' '  && !(!/^[a-z-ñA-Z-Ñ ]*$/g.test(name)))
      return name;
  }while(true);
  //validamos datos del nombre en el cual solo puede insertar datos "string"
} 
alert(`|----------------------------------|`+'\n'+`
|  Codigo  |   Nombre   |  Precio  |`+'\n'+`
|----------------------------------|`+'\n'+`
|   (p)    | pantalones |  $40000  |`+'\n'+`
|----------------------------------|`+'\n'+`
|   (c)    |  camisas   |  $50000  |`+'\n'+`
|----------------------------------|`+'\n'+`
|   (m)    |  medias    |  $10000  |`+'\n'+`
|----------------------------------|`);
//creamos la tabla y damos 3 opciones de uso
  var ropita, cantidad;
do {
  alert('Hola '+ name);
  do{
   ropita = prompt(" ¿Que desea comprar?")
  }while(ropita != 'p' && ropita != 'c' && ropita != 'm' && ropita != 'P' && ropita != 'C' && ropita != 'M')
  //validamos datos de tal manera que se puedan insertar solo los datos que estan en la tabla
  do{
   cantidad = prompt('¿Cuantos articulos desea comprar?')
  }while(isNaN(cantidad) || cantidad < 1)
  //la cantidad solo puede ser numeros enteros.
  //En esta parte del codigo, validamos datos de tal manera que el cliente solo pueda digitar lo que se observa, ya que si digita otra cosa lo devolvera.
  let ropa = {
    p: 40000,
    c: 30000,
    m: 10000,
  }
  //creamos un objeto el cual contiene los precios de cada uno de los productos que tenemos en nuestro carrito de compras
  switch (ropita) {
    case 'P':
      case 'p':
      let sumap = ropa.p * cantidad
      alert('El total de su compra de pantalones: $' + sumap)
      break;''
    case  'C':
      case 'c':
      let sumac = ropa.c * cantidad
      alert('El total de su compra de camisas es  es: $' + sumac)
      break;
    case 'M':
      case 'm':
      let sumam = ropa.m * cantidad
      alert('El total de su compra de medias es: $' + sumam)
      break;
    default:
    alert('no coinciden los datos')
  }
  //Creamos un "switch" para que cuando el cliente digite un valor el switch lea cual de los valores digito y si conincide con cada uno de ellos entonces que realice las operaciones que vemos acontinuacion.
  valid = confirm('¿Desea realizar mas compras?')
} while (valid === true)
//Y por ultimo ponemos un "while" con un "confirm", por si el cliente desea realizar mas compras.