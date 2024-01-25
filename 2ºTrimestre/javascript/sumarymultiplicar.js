 // Array para almacenar los números reales
 let numeros = [];

 // Función para agregar números al array
 function añadir() {
     // Obtener el valor del campo de entrada
     const numeroInput = document.getElementById('numeroInput');
     // Convertir el valor a un número real (flotante)
     const numero = parseFloat(numeroInput.value);

     // Verificar si el valor es un número
     if (!isNaN(numero)) {
         // Añadir el número al array
         numeros.push(numero);
         // Limpiar el campo de entrada después de agregar
         numeroInput.value = '';
     } else {
         // Mostrar un mensaje de error si no es un número válido
         alert('Por favor, introduce un número real válido.');
     }
 }

 // Función para realizar la operación (suma o multiplicación)
 function calcular(operacion) {
     // Obtener el elemento donde se mostrará el resultado
     const resultadoElement = document.getElementById('resultado');
     let resultado;

     // Verificar si hay números en el array
     if (numeros.length === 0) {
         resultado = 'No hay números para calcular.';
     } else {
         // Calcular la suma o multiplicación según la operación seleccionada
         if (operacion === 'sumar') {
             // Sumar todos los elementos del array
             resultado = numeros.reduce((sum, num) => sum + num, 0);
         } else if (operacion === 'multiplicar') {
             // Multiplicar todos los elementos del array
             resultado = numeros.reduce((product, num) => product * num, 1);
         }
     }

     // Mostrar el resultado en la interfaz de usuario
     resultadoElement.textContent = `Resultado de ${operacion}: ${resultado}`;
 }