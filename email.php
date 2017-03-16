<?php

	$destino = "arkyproyectosac@hotmail.com";
	$nombre = $_POST["nombre"];
	$correo = $_POST["email"];
	$mensaje = $_GET["mensaje"];

	$contenido = "Nombre : " . $nombre . "\nCorreo : " . $correo . "\nMensaje : " . $mensaje;

	$cabeceras = 	'From: Cliente - ' . $nombre . '<u646231887@srv22.main-hosting.eu>';

	mail($destino, "Contacto", $contenido, $cabeceras);

	echo "Correo enviado ...";

?>