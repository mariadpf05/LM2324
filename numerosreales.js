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
    const resultado = document.getElementById('resultado'); 
    if () {
        resultado = 'No hay números para calcular.';
    } 
    else () {
        resultado = numeros.reduce();
        resultado.textContent = 'La suma de los números es: suma';
        }
    }

function multiplicar(){
    const resultado = document.getElementById('resultado');
    if () {
        resultado = 'No hay números para calcular.';
    }
    else () {
    resultado = numeros.reduce();
    resultado.textContent = 'El producto de los números es: multiplicacion';
   
    }
}
