document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const mensajeDiv = document.getElementById('mensaje');

    boton.addEventListener('click', function() {
        // Acción simple del lado del cliente (sin backend)
        // Cambiamos el texto del div con ID "mensaje"
        mensajeDiv.textContent = "¡El botón fue presionado en el sitio estático!";

        // También podrías hacer otras cosas aquí, como:
        // - Cambiar el color del texto: mensajeDiv.style.color = 'green';
        // - Mostrar una alerta: alert('¡Hiciste clic!');
    });
});


 //document.addEventListener('DOMContentLoaded', function() {
  //   const boton = document.getElementById('miBoton');
   //  const mensajeDiv = document.getElementById('mensaje');

   //  boton.addEventListener('click', function() {
     //    fetch('/api/mensaje') // Llamada al backend
        //     .then(response => response.json())
        //     .then(data => {
          //       mensajeDiv.textContent = data.mensaje;
       //     });
//    });
//});
