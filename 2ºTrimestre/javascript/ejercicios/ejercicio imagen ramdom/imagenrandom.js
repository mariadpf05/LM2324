function numero(x){
     return(Math.floor(Math.random() * x + 1 ));
    }
    var cambia_imagen = new Array();
    cambia_imagen[0] = "imagen1.jpg";
    cambia_imagen[1] = "imagen2.jpg";
    cambia_imagen[2] = "imagen3.jpg";
    cambia_imagen[3] = "imagen4.jpg";
    cambia_imagen[4] = "imagen5.jpg";
    cambia_imagen[5] = "imagen6.jpg";
    cambia_imagen[6] = "imagen7.jpg";
function aleatoria(){
     document.getElementById("aleatoria").src = "imagen/" + cambia_imagen[numero(7)-1];
}