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
        if (numeros[i]%2 == 0){
            s = s + numeros[i]
        }
        
    }
    document.getElementById("resultado").innerHTML = s
}
