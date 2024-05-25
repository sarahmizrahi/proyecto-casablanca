<?php

//Para mensaje de enviado en CONTACTO.html
if (isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['mensaje'])) {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    echo '¡Enviado!';
} else {
    echo 'Error';
}
