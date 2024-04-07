document.getElementById("contact-form").addEventListener("submit", function(event){

        event.preventDefault();
        
        var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        var button = document.getElementById('liveAlertBtn');

        alertPlaceholder.innerHTML = '<div class="alert alert-success" role="alert">Mensaje enviado exitosamente</div>';

        document.getElementById("contact-form").reset();
    });

    document.getElementById("terms").addEventListener("click", function() {
        // Verifica si el checkbox está marcado
        if (this.checked) {
            // Mostrar el modal de términos y condiciones
            var myModal = new bootstrap.Modal(document.getElementById('termsModal'), {
                keyboard: false
            });
            myModal.show();
        }
    });

    document.getElementById("contact-form").addEventListener("submit", function(event){
        event.preventDefault();
        
        
        var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        alertPlaceholder.innerHTML = '<div class="alert alert-success" role="alert">Mensaje enviado exitosamente</div>';
        
        // Ocultar la alerta de mensaje enviado exitosamente.
        setTimeout(function(){
            alertPlaceholder.innerHTML = '';
        }, 6000); // 1000 milisegundos = 1 segundos
        
        // También puedes limpiar el formulario después de enviarlo, si es necesario
        document.getElementById("contact-form").reset();
    });

