document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const mensajeDiv = document.getElementById('mensaje');

    boton.addEventListener('click', function() {
        // Esta línea intenta obtener datos del backend
        fetch('/api/mensaje')
            .then(response => response.json()) // Espera una respuesta JSON
            .then(data => {
                // Actualiza el div con el mensaje recibido del backend
                mensajeDiv.textContent = data.mensaje;
            })
            .catch(error => {
                // Maneja errores si la llamada al backend falla
                console.error('Error al obtener el mensaje del backend:', error);
                mensajeDiv.textContent = "Error al conectar con el backend.";
            });
    });
});
