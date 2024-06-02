document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('contactForm');
    const mensaje = document.getElementById('mensaje');
    const tipoConsulta = document.getElementById('tipo');

    if (mensaje && tipoConsulta) {
        mensaje.addEventListener('input', cambiarTipoConsulta);
    }

     formulario.addEventListener('submit', validarFormulario); 

    /* formulario.addEventListener('submit', (event) => {
        console.log('Evento de envío del formulario activado.');
        validarFormulario(event);
    }); */

    function cambiarTipoConsulta() {
        const mensajeValue = mensaje.value.toLowerCase();
        if (mensajeValue.includes('compra')) {
            tipoConsulta.value = 'compra';
        } else if (mensajeValue.includes('venta')) {
            tipoConsulta.value = 'venta';
        } else if (mensajeValue.includes('consulta')) {
            tipoConsulta.value = 'consulta';
        } else {
            tipoConsulta.value = 'otro';
        }
    }

    function validarFormulario(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        
        let camposCompletos = true; // Suponemos que todos los campos están completos inicialmente
    
    // Iteramos sobre los elementos del formulario
    for (let i = 0; i < formulario.elements.length; i++) {
        const elemento = formulario.elements[i];
        
        // Verificamos si el elemento es un campo de texto, área de texto, o select
        if (elemento.tagName === 'INPUT' || elemento.tagName === 'TEXTAREA' || elemento.tagName === 'SELECT') {
            // Verificamos si el valor del campo está vacío
            if (elemento.value.trim() === '') {
                camposCompletos = false; // Marcamos que no todos los campos están completos
                break; // Salimos del bucle ya que encontramos al menos un campo vacío
            }
        }
    }
    
    if (camposCompletos) {
        alert('Formulario enviado con éxito.');
        console.log('exito');
    } else {
        alert('Por favor, complete todos los campos obligatorios.');
        console.log('Por favor, complete todos los campos obligatorios.');
    }


        
     
    }

});
