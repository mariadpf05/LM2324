function saludo() {
    var usuario;
    usuario = document.getElementById("usuario").value;
    var clave;
    clave = document.getElementById("clave").value;
    alert('Bienvenido '+usuario + ' con contraseña ' + clave);
    }