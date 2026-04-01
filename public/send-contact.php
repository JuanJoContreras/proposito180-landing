<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Metodo no permitido']); exit();
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
$mensaje      = nl2br(htmlspecialchars(trim($data['mensaje'] ?? '')));

if (empty($nombre) || empty($email) || empty(strip_tags($mensaje))) {
    echo json_encode(['success' => false, 'message' => 'Campos requeridos incompletos']); exit();
}

$destinatarios = [
    'contacto@proposito180.cl',
    'comercial@proposito180.cl',
    'juanjose@proposito180.cl',
    'marketing.proposito180@gmail.com',
];

$fecha = date('d-m-Y H:i:s');
$asunto = '=?UTF-8?B?' . base64_encode('Nuevo contacto Proposito 180 - ' . $nombre) . '?=';

$html = '<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nuevo contacto Proposito 180</title></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:30px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- HEADER -->
      <tr>
        <td style="background:#1e2d5e;border-radius:8px 8px 0 0;padding:32px 40px;text-align:center;">
          <div style="font-size:32px;margin-bottom:8px;">&#127775;</div>
          <h1 style="margin:0;color:#c9a84c;font-size:26px;font-weight:900;letter-spacing:3px;text-transform:uppercase;">PROP&Oacute;SITO 180</h1>
          <p style="margin:6px 0 0;color:#8da0c4;font-size:11px;letter-spacing:3px;text-transform:uppercase;">CONSULTING ESTRAT&Eacute;GICO</p>
        </td>
      </tr>

      <!-- TITLE -->
      <tr>
        <td style="background:#ffffff;padding:32px 40px 16px;border-left:1px solid #e0e0e0;border-right:1px solid #e0e0e0;">
          <h2 style="margin:0 0 8px;color:#1e2d5e;font-size:22px;font-weight:700;">Formulario de Contacto</h2>
          <p style="margin:0;color:#666;font-size:14px;">Un cliente ha completado el formulario de contacto.</p>
          <p style="margin:8px 0 0;color:#999;font-size:13px;">' . $fecha . '</p>
        </td>
      </tr>

      <!-- DATOS DEL CLIENTE -->
      <tr>
        <td style="background:#ffffff;padding:8px 40px 24px;border-left:1px solid #e0e0e0;border-right:1px solid #e0e0e0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e0e7ff;border-radius:8px;overflow:hidden;">
            <tr><td style="background:#eef2ff;padding:12px 20px;">
              <strong style="color:#1e2d5e;font-size:14px;">Datos del cliente</strong>
            </td></tr>
            <tr><td style="padding:20px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td style="padding:5px 0;"><span style="font-weight:700;color:#333;font-size:14px;">Nombre:</span> <span style="color:#555;font-size:14px;">' . $nombre . '</span></td></tr>
                <tr><td style="padding:5px 0;"><span style="font-weight:700;color:#333;font-size:14px;">Tel&eacute;fono:</span> <span style="color:#555;font-size:14px;">' . $telefono . '</span></td></tr>
                <tr><td style="padding:5px 0;"><span style="font-weight:700;color:#333;font-size:14px;">Email:</span> <a href="mailto:' . $email . '" style="color:#3b82f6;font-size:14px;">' . $email . '</a></td></tr>
                <tr><td style="padding:5px 0;"><span style="font-weight:700;color:#333;font-size:14px;">Organizaci&oacute;n:</span> <span style="color:#555;font-size:14px;">' . $organizacion . '</span></td></tr>
                <tr><td style="padding:5px 0;"><span style="font-weight:700;color:#333;font-size:14px;">Regi&oacute;n:</span> <span style="color:#555;font-size:14px;">' . $region . '</span></td></tr>
                <tr><td style="padding:5px 0;"><span style="font-weight:700;color:#333;font-size:14px;">Comuna:</span> <span style="color:#555;font-size:14px;">' . $comuna . '</span></td></tr>
                <tr><td style="padding:5px 0;"><span style="font-weight:700;color:#333;font-size:14px;">Servicio de inter&eacute;s:</span> <span style="color:#555;font-size:14px;">' . $servicio . '</span></td></tr>
              </table>
            </td></tr>
          </table>
        </td>
      </tr>

      <!-- MENSAJE -->
      <tr>
        <td style="background:#ffffff;padding:0 40px 32px;border-left:1px solid #e0e0e0;border-right:1px solid #e0e0e0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e0e7ff;border-radius:8px;overflow:hidden;">
            <tr><td style="background:#eef2ff;padding:12px 20px;">
              <strong style="color:#1e2d5e;font-size:14px;">Mensaje:</strong>
            </td></tr>
            <tr><td style="padding:20px;color:#555;font-size:14px;line-height:1.6;">' . $mensaje . '</td></tr>
          </table>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background:#1e2d5e;border-radius:0 0 8px 8px;padding:20px 40px;text-align:center;">
          <a href="https://www.proposito180.cl" style="color:#c9a84c;font-size:13px;text-decoration:none;">www.proposito180.cl</a>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body></html>';

$to      = implode(', ', $destinatarios);
$headers = implode("\r\n", [
    'From: Proposito 180 Web <noreply@proposito180.cl>',
    'Reply-To: ' . $nombre . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
]);

$enviado = mail($to, $asunto, $html, $headers);

if ($enviado) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al enviar. Por favor escríbenos directamente a contacto@proposito180.cl']);
}
?>
