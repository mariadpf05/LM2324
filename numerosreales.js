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
    const resultadoElement = document.getElementById('resultado'); 
    if () {
        resultado = 'No hay números para calcular.';
    } 
    else (operacion === sumar) {
        resultado = numeros.reduce();
        }
    }

function multiplicar(){
    const resultadoElement = document.getElementById('resultado');
    if () {
        resultado = 'No hay números para calcular.';
    }
    else (operacion === multiplicar) {
    resultado = numeros.reduce();
    }
}