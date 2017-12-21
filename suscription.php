<?
    $destino = "pablo@consonante.xyz";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo .  "n\Teléfono: " . $telefono;
    mail($destino,"Contacto de CSNT", $contenido);
    header("Location:gracias.html");
?>