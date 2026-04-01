<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Metodo no permitido']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) $data = $_POST;

$nombre       = htmlspecialchars(trim($data['nombre'] ?? ''));
$email        = htmlspecialchars(trim($data['email'] ?? ''));
$telefono     = htmlspecialchars(trim($data['telefono'] ?? ''));
$organizacion = htmlspecialchars(trim($data['organizacion'] ?? 'No especificada'));
$region       = htmlspecialchars(trim($data['region'] ?? 'No especificada'));
$comuna       = htmlspecialchars(trim($data['comuna'] ?? 'No especificada'));
$servicio     = htmlspecialchars(trim($data['servicio'] ?? 'No especificado'));
$mensaje      = htmlspecialchars(trim($data['mensaje'] ?? ''));

if (empty($nombre) || empty($email) || empty($mensaje)) {
    echo json_encode(['success' => false, 'message' => 'Campos requeridos incompletos']);
    exit();
}

$destinatarios = [
    'contacto@proposito180.cl',
    'comercial@proposito180.cl',
    'juanjose@proposito180.cl',
    'marketing.proposito180@gmail.com',
];

$asunto = '=?UTF-8?B?' . base64_encode('Nuevo contacto Proposito 180 - ' . $nombre) . '?=';

$cuerpo  = "NUEVO CONTACTO DESDE PROPOSITO180.CL\r\n";
$cuerpo .= str_repeat('=', 50) . "\r\n\r\n";
$cuerpo .= "Nombre:           " . $nombre . "\r\n";
$cuerpo .= "Email:            " . $email . "\r\n";
$cuerpo .= "Telefono:         " . $telefono . "\r\n";
$cuerpo .= "Organizacion:     " . $organizacion . "\r\n";
$cuerpo .= "Region:           " . $region . "\r\n";
$cuerpo .= "Comuna:           " . $comuna . "\r\n";
$cuerpo .= "Servicio interes: " . $servicio . "\r\n\r\n";
$cuerpo .= "MENSAJE:\r\n";
$cuerpo .= str_repeat('-', 40) . "\r\n";
$cuerpo .= $mensaje . "\r\n";

$to      = implode(', ', $destinatarios);
$headers = implode("\r\n", [
    'From: Proposito 180 Web <noreply@proposito180.cl>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
]);

$enviado = mail($to, $asunto, base64_encode($cuerpo), $headers);

if ($enviado) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al enviar. Por favor escríbenos directamente a contacto@proposito180.cl']);
}
?>
