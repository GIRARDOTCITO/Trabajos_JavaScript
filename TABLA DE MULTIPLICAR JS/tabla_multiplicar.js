//Juan Sebastian Girardot Antonio
var valid, num, i;
//Definimos variables 
do{
do{
  multi = 'Tabla Multiplicación:';
  //Inicializamos la tabla de multiplicar de tal forma que muestre un mensaje
num = prompt('Digite una tabla de multiplicar')
  if (num==""){
    num = 1;
  }
  //Damos un valor por defecto si el usuario no digita un numero
   }while(isNaN(num) || num < 1);
  for ( i = 1; i <= 10; i++){
     multi = multi+'\n'+(num+" X "+i +" = "+num*i);
    }alert(multi)  
//Realizamos la operacion con un "for", y aumentamos la variable "i" hasta que llegue a 10.
//validamos los datos que sean numeros enteros, y creamos la variable "multi", en la cual esta la operacion 
//la variable "multi", contiene las variables "Num" y "i", las cuales crean la tabla de multiplicar.
  valid = confirm('deseas una nueva tabla')
}while(valid === true)
//Se repite si el usuario lo desea.