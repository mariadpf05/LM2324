var notas = [];

function anadir(){
    let numero = parseFloat(document.getElementById("numero").value);
    //Borramos cualquier mensaje de error previo
    document.getElementById("aviso").innerHTML = ""
    if (isNaN(numero)){ //Si true significaa que no es un número
        document.getElementById("aviso").innerHTML = "Debes introducir un número entre 0 y 10"
    }
    else{
        //Compruebo que está comprendido entre 0 y 10
        if (numero<0 || numero>10){
            document.getElementById("aviso").innerHTML = "Debes introducir un número entre 0 y 10"
        }
        else {
            notas.push(numero);
            document.getElementById("notas").innerHTML = notas;
        }
    }        
}
function eliminar(){
    numeros.splice();
      actualizarOutput();
}
function calcularMedia(){
    let total = 0.0;
    for (var i=0; i<notas.length;i++){
        total = total+notas[i]; //total += notas[i]
    }
    total = total/notas.length;
    document.getElementById("resultado").innerHTML = total.toFixed(2);
}