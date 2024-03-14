/*Código javascript del conversor*/
function convertir(divisa){
    let valor = document.getElementById("cantidad").value;  // a la variable valor de damos el valor de la cantidad introducida
    let resultado = 0;  //Establecemos el resultado en 0 al principio
    if (divisa=="euro"){ //Si la moneda es €
        //Convierto a euro
        resultado = valor * 0.91;  //El resultado sera la cantidad * el cambio
        document.getElementById("resultado").innerHTML = resultado + " €";  //En el parrafo se mostrará el resultado + €
    }
    else{
        //Convertir a dolares
        resultado = valor * 1.09;  //El resultado sera la cantidad * el cambio
        document.getElementById("resultado").innerHTML = resultado + " $";  //En el parrafo se mostrará el resultado + $
    }
}