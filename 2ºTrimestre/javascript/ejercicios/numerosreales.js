var numeros = [ ];
function añadir(){
    var n = parseFloat(document.getElementById("n").value);
    numeros.push(n);
    document.getElementById("resultado").innerHTML = numeros 
}
var s = 0
function suma(){
    s = 0 
    for (var i = 0 ; i < numeros.length; i++) {
        s += numeros[i]
    }
    document.getElementById("resultado").innerHTML = s
}

function multi(){
    var m = 1; 
    for (var i = 0 ; i < numeros.length; i++) {
        m *= numeros[i]
    }
    document.getElementById("resultado").innerHTML = m
}

// si 5%2 == 0 (el resto de la division)