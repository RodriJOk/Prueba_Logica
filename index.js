    // Escribí una función que reciba dos parámetros: un string S y un integer R.
    // La función debe devolver un string donde los caracteres consecutivos de S no se repitan más que R veces.
    // Tiene que devolver un string con el texto limpio y la cantidad de caracteres repetidos correcta. 
    
    function repeticionLetras(S, R) {
        //Aca "descompongo" o slipliteo la palabra
        let letras = S.split('');
        // Aca declaro una variable que la inicializo como vacio y fuera del scope de iteracio
        let resultado = '';
        //Inicializo un contador en cero, despues en la ejecucion, 
        //me va a ser util para validar el llegar a la condicion del parametro R
        let contador = 0;
        //Aca almaceno la letra anterior, para que la pueda comparar con la actual en la iteracion
        let letraAnterior = '';
        //Itero por el la palabra descompuesta
        for (let i = 0; i < letras.length; i++) {
            // Consulto si no hay coincidencia. Esto me permite mostrar un resultado cuando no hay repeticion de letras
            if (letras[i] != letraAnterior) {
                contador = 1;
                resultado += letras[i];
                letraAnterior = letras[i];
            } else {
                if (contador < R) {
                    contador++;
                    resultado += letras[i];
                }
            }
      }
      return resultado;
}
//Aca invoco la funcion con uno de los ejemplos. 
// console.log(repeticionLetras('hola', 7234987));
// console.log(repeticionLetras('AAAAAFFFFOOOA', 2));
// console.log(repeticionLetras('111223333344', 1));
console.log(repeticionLetras('AABB', 1));