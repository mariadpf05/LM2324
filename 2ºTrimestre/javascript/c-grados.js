/*Código javascript del conversor*/
function convertir(divisa){
    let valor = document.getElementById("grados").value;
    let resultado = 0;
    if (divisa=="Celcius"){
        //Convierto a celcius
        resultado = (valor - 32) * 5/9;
        document.getElementById("resultado").innerHTML = resultado + " ºC";
    }
    else{
        //Convertir a Fahrenheit
        resultado = (valor * 9/5) + 32;
        document.getElementById("resultado").innerHTML = resultado + " ºF";
    }
}
