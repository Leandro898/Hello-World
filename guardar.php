<?php

include('baseDatos.php');

if (isset($_POST['carrit'])) {
    $text = $_POST['carrit'];
    echo $text;
    // $nombre = $_POST['nombre'];
    // $precio = $_POST['guardar'];

    $Palabase = "INSERT INTO registradora(precio) VALUES ('$text')";
    $resultado = mysqli_query($conexion, $Palabase);
    if (!$resultado) {
        die('hay un error');
    }
    header("Location: miIndex.php");
}

?>