$(document).ready(function () {

    //btnEnviarCoti
    $('#btnEnviarCoti').click(function (e) { 
        tipo_proyecto=$('#tipo_proyecto').val();
        tipo_req=$('#tipo_req').val();
        nombre=$('#nombre').val();
        telefono=$('#telefono').val();
        email=$('#email').val();

        if(tipo_proyecto!="" && tipo_req!="" && nombre!="" && telefono!="" && email!=""){
            //Enviar datos del form al servidor
            $.ajax({
                type: "POST",
                url: "../enviarEmail.php",
                dataType: "json",
                data: {
                    tipo_proyecto: tipo_proyecto,
                    tipo_req: tipo_req,
                    nombre: nombre,
                    telefono: telefono,
                    email: email,
                },
                beforeSend: function(){
                    $('#btnEnviarCoti').attr('disabled', 'disabled');
                    $('#btnEnviarCoti').val('Enviando...');
                },
                success: function (response) {
                    if (response == 1) {
                        Swal.fire({
                            icon: "success",
                            title: "¡Cotización enviada!",
                            text: 'Gracias por dejar tus datos, nos contactactaremos contigo lo más pronto posible.'
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Error al enviar cotización!",
                        });
                    }
                }
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Es necesario ingresar todos los campos para enviar',
            })
        }
        
    });
});