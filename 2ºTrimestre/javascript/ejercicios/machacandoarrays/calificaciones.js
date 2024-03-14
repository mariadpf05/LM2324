var notas = []; //Creamos un array vacío

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
function eliminar() {
    document.getElementById("aviso").innerHTML = ""
    document.getElementById("notas").innerHTML = ""
    document.getElementById("resultado").innerHTML = ""
    notas = [];
  }
function calcularMedia(){
    let total = 0.0;
    for (var i=0; i<notas.length;i++){
        total = total+notas[i]; //total += notas[i]
// En cada iteración del bucle, se suma el valor de la nota actual al total acumulado en la variable total.
    }
    total = total/notas.length;
//Se divide el total acumulado entre el número total de notas en el array notas.
    document.getElementById("resultado").innerHTML = total.toFixed(2);
}