function suma (){
    var n1 = parseFloat (document.getElementById("n1").value);
    var n2 = parseFloat (document.getElementById("n2").value);
    document.getElementById("resultado").innerHTML = n1+n2;
}
function resta (){
    var n1 = parseFloat (document.getElementById("n1").value);
    var n2 = parseFloat (document.getElementById("n2").value);
    document.getElementById("resultado").innerHTML = n1-n2;
}
function multi (){
    var n1 = parseFloat (document.getElementById("n1").value);
    var n2 = parseFloat (document.getElementById("n2").value);
    document.getElementById("resultado").innerHTML = n1*n2;
}
function divide (){
    var n1 = parseFloat (document.getElementById("n1").value);
    var n2 = parseFloat (document.getElementById("n2").value);
    if (n2==0)
        alert("Imposible dividir por 0");
    else
        document.getElementById("resultado").innerHTML = n1/n2;
}
//En todas las funciones tenemos dos variables una es n1 y otra es n2
//Todas se centran en identificar que se ha introducido un número y sumar, restar, multiplicar o dividir esas dos variables introducidas
//En la función para dividir se añade un condicional ya que ningún número se puede dividir por 0