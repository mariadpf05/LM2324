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
let miArray = [];

  function actualizarOutput() {
    document.getElementById('arrayOutput').innerText = miArray.join(', ');
  }

  function agregarElemento() {
    const nuevoElemento = document.getElementById('elemento').value;
    if (nuevoElemento.trim() !== '') {
      miArray.push(nuevoElemento);
      actualizarOutput();
    }
  }

  function eliminarElemento() {
    const elementoEliminar = document.getElementById('elemento').value;
    const index = miArray.indexOf(elementoEliminar);
    if (index !== -1) {
      miArray.splice(index, 1);
      actualizarOutput();
    }
  }

  function ordenarCreciente() {
    miArray.sort();
    actualizarOutput();
  }

  function ordenarDecreciente() {
    miArray.sort((a, b) => b.localeCompare(a));
    actualizarOutput();
  }

  function buscarElemento() {
    const elementoBuscar = document.getElementById('buscarElemento').value;
    const index = miArray.indexOf(elementoBuscar);
    if (index !== -1) {
      document.getElementById('posicionOutput').innerText = index + 1;
    } else {
      document.getElementById('posicionOutput').innerText = 'No encontrado';
    }
  }