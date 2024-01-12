/*Código javascript del conversor*/
function convertir(divisa){
    let valor = document.getElementById("grados").value;
    let resultado = 0;
    if (divisa=="Celcius"){
        //Convierto a celcius
        resultado = valor * 0.91;
        document.getElementById("resultado").innerHTML = resultado + " ºC";
    }
    else{
        //Convertir a Fahrenheit
        resultado = valor * 1.09;
        document.getElementById("resultado").innerHTML = resultado + " ºF";
    }
}