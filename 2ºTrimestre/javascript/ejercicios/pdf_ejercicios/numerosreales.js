var numeros = [ ]; //Declaramos un Array vacio
function añadir(){
    var n = parseFloat(document.getElementById("n").value);
    //se obtiene el valor del campo de entrada con el ID "n" 
    //Se utiliza parseFloat() para convertir el valor a un número de punto flotante y se guarda en la variable n.
    numeros.push(n);
    //El número n se agrega al final del array "numeros" usando el método push().
    document.getElementById("resultado").innerHTML = numeros 
    //Se actualiza el contenido del elemento HTML con el ID "resultado" para mostrar los números ingresados hasta el momento.
}
var s = 0
//Se declara una variable s que se utilizará para almacenar la suma de los números.
function suma(){
    s = 0 //Se inicializa la variable s a cero.
    for (var i = 0 ; i < numeros.length; i++) {
        s += numeros[i]
    }
    //var i = 0: Se inicia el bucle. Se declara una variable i y se le asigna el valor inicial de 0. 
    //Esta variable se utiliza como contador para rastrear la posición actual en el array.

    //i < numeros.length: Esta es la condición terminar el bucle. 
    //Mientras la variable i sea menor que la longitud del array "numeros", el bucle continuará ejecutándose. 
    //La propiedad length de un array devuelve el número de elementos que contiene.

    //i++: Este es el incremento del bucle. Después de cada iteración del bucle, el valor de i se incrementa en uno. 
    //Esto se realiza utilizando el operador de incremento ++.

    //s += numeros[i]: Dentro del bucle, se agrega el valor del elemento actual del array "numeros" a una variable llamada s. 
    //La notación numeros[i] accede al elemento del array en la posición i. 
    //Luego, este valor se agrega a la variable s utilizando el operador de adición +=. Esto es equivalente a s = s + numeros[i].
    
    document.getElementById("resultado").innerHTML = s
    //Se actualiza el contenido del elemento HTML con el ID "resultado" para mostrar el resultado de la suma.
}

function multi(){
    var m = 1; //Se inicializa la variable m a 1
    for (var i = 0 ; i < numeros.length; i++) {
        m *= numeros[i]
    }
    document.getElementById("resultado").innerHTML = m
}

// si 5%2 == 0 (el resto de la division)
