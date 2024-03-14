/*Código javascript del conversor*/
function convertir(divisa){
    let valor = document.getElementById("grados").value;  // a la variable valor de damos el valor de los grados introducidos
    let resultado = 0;  //Valor inicial 0
    if (divisa=="Celcius"){  //ºF a ºC
        //Convierto a celcius
        resultado = (valor - 32) * 5/9;  //resultado pasa a ser el cambio de grados
        document.getElementById("resultado").innerHTML = resultado + " ºC";  //Se mostrara en el parrafo resultado el valor calculado antes
    }
    else{
        //Convertir a Fahrenheit
        resultado = (valor * 9/5) + 32;  //resultado pasa a ser el cambio de grados
        document.getElementById("resultado").innerHTML = resultado + " ºF";  //Se mostrara en el parrafo resultado el valor calculado antes
    }
}
