let numeros = [ ];
function añadir(){
    const añadido = document.getElementById('añadido')
    const numero = parseFloat(añadido.value);
    if (!isNaN(numero)) {
        numeros.push(numero);
        numeroInput.value = '';
    } 
    else {
        alert('Por favor, introduce un número real válido.');
    }
}
function sumar(){

}
function multiplicar(){

}