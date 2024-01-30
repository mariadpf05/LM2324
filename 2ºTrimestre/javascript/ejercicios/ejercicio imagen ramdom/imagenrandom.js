function rand(n){
    // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
     return(Math.floor(Math.random() * n + 1 ));
    }

    //guardas imagenes en el array
    var cambia_imagen = new Array();
    cambia_imagen[0] = "imagen1.jpg";
    cambia_imagen[1] = "imagen2.jpg";
    cambia_imagen[2] = "imagen3.jpg";
    cambia_imagen[3] = "imagen4.jpg";
    cambia_imagen[4] = "imagen5.jpg";

    //la función para que al clickear establezca el source del tag imagem que tiene id "ia" (Imagen aleatoria)
    //como no son tantas, puede que alguna vez se repita 2 veces la misma
    //incluso, si usamos numeros para las imágenes, la script puede ser más sencilla
    
    function aleatoria(){
         document.getElementById("aleatoria").src = cambia_imagen[rand(5)-1];
    }