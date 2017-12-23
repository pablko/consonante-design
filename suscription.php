<?
    $destino = "pablo@consonante.xyz";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $contenido = 
        "
        <html lang='es'>
        <head>
            <title>Contacto de CSNT Design</title>
            <meta charset='UTF-8'>
            <link rel='stylesheet' href='css/bootstrap.min.css'>
            <link rel='stylesheet' href='css/mail.css'>
        </head>
        <body>
            <div class='container' style='background-color: #bed4de'>
                <h1>Nuevo contacto de CSNT Design</h1>
                <table>
                    <tr>
                      <th>Nombre</th><th>Correo</th><th>Teléfono</th>
                    </tr>
                    <tr>
                      <td>" . $nombre . "</td><td>" . $correo . "</td><td>" . $telefono . " </td>
                    </tr>
                </table>
            </div>
        </body>
        </html>
        ";
    $cabeceras  = 'MIME-Version: 1.0' . "\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\n";
    mail($destino,"Contacto de CSNT", $contenido, $cabeceras);
    header("Location:gracias.html");
?>
