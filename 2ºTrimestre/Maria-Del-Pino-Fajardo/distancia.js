var distancias = []; //Creamos un array vacío

function anadir(){
    let dist = parseFloat(document.getElementById("dist").value);
    //dist = ; 
    if (isNaN(dist)){ //Si true significaa que no es un número
        alert("Debes introducir un número"); 
    }
        else {
            distancias.push(dist);
            document.getElementById("distancias").innerHTML = distancias;
        }
    }


    /*
    function dividirCadena(cadenaADividir, separador) {
        var arrayDeCadenas = cadenaADividir.split(separador);
        document.write('<p>La cadena original es: "' + cadenaADividir + '"');
        document.write('<br>El separador es: "' + separador + '"');
        document.write(
          "<br>El array tiene " + arrayDeCadenas.length + " elementos: ",
        );
      
        for (var i = 0; i < arrayDeCadenas.length; i++) {
          document.write(arrayDeCadenas[i] + " / ");
        }
      }
      
      var dist = parseFloat(document.getElementById("dist").value);
      var coma = ",";
      
      dividirCadena(dist, coma);
      dividirCadena(dist);
      */

function sumar(){
    let total = 0.0;
    for (var i=0; i<distancias.length;i++){
        total = total+distancias[i]; 
    }
    alert('La distancia total es de '+total.toFixed(2));
}