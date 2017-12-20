<?
    $destino = "pablo@consonante.xyz";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo .  "n\Teléfono: " . $telefono;
    mail($destino,"Contacto", $contenido);

    if (count($_POST)>0) echo "Se envió correctamente. Nos contactaremos pronto.";

?>