let numeros=[1,2,3,4,5,6,7,8,9,10];

function sumaPares(numeros){
    let total = 0.0;
    for (var i=0;i<numeros.length;i++){
       if (numeros[i]%2 == 0.0)
        total = total + numeros[i];
    }
    document.getElementById("resultado").innerHTML = total;
}
    sumaPares(numeros);

/* sumar pares añadiendo tú los números
var numeros = [ ];
function añadir(){
    var n = parseFloat(document.getElementById("n").value);
    numeros.push(n);
    document.getElementById("resultado").innerHTML = numeros 
}
var s = 0
function sumarpares(){
    s = 0 
    for (var i = 0 ; i < numeros.length; i++) {
        if (numeros[i]%2 == 0){
            s = s + numeros[i]
        } 
    }
    document.getElementById("resultado").innerHTML = s
}
*/