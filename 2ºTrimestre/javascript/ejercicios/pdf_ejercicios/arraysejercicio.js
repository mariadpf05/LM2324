/*var elemento=[]
function elimina() {
elemento.pop();
const elemento = document.getElementById("demo").innerHTML = elemento;
}
function añade() {
elemento.push();
const elemento = document.getElementById("demo").innerHTML = elemento;
}
function creciente (){
elemento.sort()
const elemento = document.getElementById("demo").innerHTML = elemento;
}
function decreciente (){
elemento.reverse()
const elemento = document.getElementById("demo").innerHTML = elemento;
}
function buscar (){
const elemento = document.getElementById("demo").innerHTML = " la palabra esta en la posicion " + position;
}
*/
let miArray = [];  //Creamos un Array vacio en el que todo lo que escribamos se irá añadiendo

  function actualizarOutput() {
    document.getElementById('arrayOutput').innerText = miArray.join(', ');  //Actualizará nuestro array en función de que botón pulsemos
  }

  function agregarElemento() {
    const nuevoElemento = document.getElementById('elemento').value;
    if (nuevoElemento.trim() !== '') {
      miArray.push(nuevoElemento);
      actualizarOutput();
      //Creamos una constanste llamada nuevoElemento que cogerá lo que escribamos en el input y lo añadirá al array
    }
  }

  function eliminarElemento() {
    const elementoEliminar = document.getElementById('elemento').value;
    const index = miArray.indexOf(elementoEliminar);
    if (index !== -1) {
      miArray.splice(index, 1);
      actualizarOutput();
      //Creamos una constante llamada elementoEliminar que cogerá el último elemento que hemos escrito en el input y lo elimminará del array
    }
  }

  function ordenarCreciente() {
    miArray.sort();
    actualizarOutput();
    //Al pulsar el boton de Ordenar Crecientemente el array de ordenará alfabeticamente
  }

  function ordenarDecreciente() {
    miArray.sort((a, b) => b.localeCompare(a));
    actualizarOutput();
    //Al pulsar el boton de Ordenar Decientemente el array de ordenará de forma inversa al abecedario
  }

  function buscarElemento() {
    const elementoBuscar = document.getElementById('buscarElemento').value;
    //obtiene el valor del elemento de entrada (input) con el id 'buscarElemento' en el documento HTML
    //y lo almacena en la variable elementoBuscar.
    const index = miArray.indexOf(elementoBuscar);
    // utiliza el método indexOf() para buscar el valor de elementoBuscar dentro del Array.
    if (index !== -1) {
      document.getElementById('posicionOutput').innerText = index + 1;
    //Si index no es -1, significa que se encontró el elemento en miArray. 
    //En este caso, se actualiza el contenido del elemento HTML con el id 'posicionOutput' para mostrar el índice encontrado 
    //(incrementado en 1 porque los índices en JavaScript comienzan desde 0).
    } else {
      document.getElementById('posicionOutput').innerText = 'No encontrado';
    }
    //Si index es -1, significa que el elemento no se encontró en miArray. 
    //En este caso, se actualiza el contenido del elemento HTML con el mensaje 'No encontrado'.
  }