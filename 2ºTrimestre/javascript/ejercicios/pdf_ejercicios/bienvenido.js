function saludo() {
    var usuario;
    usuario = document.getElementById("usuario").value;
    var clave;
    clave = document.getElementById("clave").value;
    alert('Bienvenido '+usuario + ' con contraseña ' + clave);  //Mostrará una alerta con la frase anterior mostrando sus datos
/*
    if(usuario =="" || password== ""){
    alert('Introduzca usuario y contraseña');
    }
    else {
        alert('Bienvenido '+usuario + ' con contraseña ' + clave);
    } 
*/
}