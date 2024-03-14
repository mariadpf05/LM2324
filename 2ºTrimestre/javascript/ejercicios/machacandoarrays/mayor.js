function mayor(vector){
    let mayor = vector[0]; //por defecto el primer elemento es el mayor
    for (var i=0;i<vector.length;i++){
        if (vector[i]>mayor)
        mayor = vector[i]
    }
    return mayor;
//Si el elemento actual es mayor que el valor actual almacenado en mayor, 
//se actualiza el valor de mayor con el valor del elemento actual.
}
function menor(vector){
    let menor = vector[0]; //por defecto el primer elemento es el menor
    for (var i=0;i<vector.length;i++){
        if (vector[i]<menor)
        menor = vector[i]
    }
    return menor;
//Si el elemento actual es menor que el valor actual almacenado en menor, 
//se actualiza el valor de menor con el valor del elemento actual.
}
function imprimir(vector){
    document.getElementById("resultado").innerHTML = "" //Limpio párrafo
    for( var contador=0;contador<vector.length;contador++){
// Se inicia un bucle for que itera sobre cada elemento del vector. La variable contador se inicializa en 0 y 
//se incrementa en cada iteración hasta que llega al valor vector.length - 1, que es la longitud del vector menos 1.
        document.getElementById("resultado").innerHTML += "Elemento número " + contador + ":"
//Se concatena al contenido actual del elemento HTML con el ID "resultado" la cadena "Elemento número " seguida del valor del contador y ":". 
//Esto se hace para mostrar el número del elemento que se está imprimiendo.
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + vector[contador] + "</br>"
//Se agrega al contenido actual del elemento HTML con el ID "resultado" el valor del elemento del vector en la posición contador, 
//seguido de una etiqueta <br> para insertar un salto de línea HTML.
    }
}