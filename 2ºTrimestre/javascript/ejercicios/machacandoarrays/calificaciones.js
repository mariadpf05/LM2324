var numeros = [];

function anadir(){
    var n = parseFloat(document.getElementById("n").value);
    numeros.push(n);
    document.getElementById("resultado").innerHTML = numeros;
}
function sumar() { 
    suma = 0
    for (var i = 0 ; i< numeros.length; i++) {
        if (numeros[i]  == i>=0 && i<=10) {
            let suma = values.reduce((previous, current) => current += previous);
            let   = suma / values.length;
        }
        else {
            alert("Introduzca una calificación entre 0 y 10")
        }
    }
    document.getElementById("resultado").innerHTML = suma;
}
function eliminar(){ 
    const nEliminar = document.getElementById('n').value;
    const index = numeros.indexOf(nEliminar);
    if (index !== -1) {
      numeros.splice(index, 1);
      actualizarOutput();
    }
}