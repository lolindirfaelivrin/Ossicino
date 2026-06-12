<?php

#localhost/?i=123x123
header("Content-Type: image/png");
$dimensione = '';

if (isset($_GET['i'])) {
	$dimensione = explode('x', $_GET['i']);
}

[$altezza, $larghezza] = $dimensione;

$image = ImageCreate($altezza, $larghezza);
$background_color = imagecolorallocate($image, 0, 0, 0);
imagepng($image);
imagedestroy($image);

/*
https://www.php.net/manual/en/function.imagecreate.php
https://github.com/Lukas238/dummy-image-placeholder/tree/master
*/
