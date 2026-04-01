<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success'=>false,'message'=>'Metodo no permitido']); exit();
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
if (empty($nombre)||empty($email)||empty(strip_tags($mensaje))) {
    echo json_encode(['success'=>false,'message'=>'Campos requeridos incompletos']); exit();
}
$destinatarios = ['contacto@proposito180.cl','comercial@proposito180.cl','juanjose@proposito180.cl','marketing.proposito180@gmail.com'];
$fecha  = date('d-m-Y H:i:s');
$asunto = '=?UTF-8?B?'.base64_encode('Nuevo contacto - Proposito 180 | '.$nombre).'?=';
$logoUrl = 'https://proposito180.cl/favicon.png';
$html = <<<HTML
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Nuevo contacto Proposito 180</title></head>
<body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#eef2f7;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:12px;overflow:hidden;box-shadow:0 6px 32px rgba(30,58,95,.18);">

<!-- HEADER BRAND -->
<tr>
  <td style="background:#1e3a5f;padding:36px 40px;text-align:center;">
    <img src="{$logoUrl}" alt="Proposito 180" width="72" height="72"
         style="display:block;margin:0 auto 14px;border-radius:10px;border:3px solid #8dc63f;">
    <div style="font-size:22px;font-weight:900;letter-spacing:4px;color:#ffffff;text-transform:uppercase;margin-bottom:4px;">
      PROP&Oacute;SITO <span style="color:#8dc63f;">180</span>
    </div>
    <div style="font-size:11px;letter-spacing:3px;color:#8da0c4;text-transform:uppercase;">CONSULTING</div>
    <div style="margin-top:16px;height:3px;background:linear-gradient(to right,#8dc63f,#2d5a8e,#8dc63f);border-radius:2px;"></div>
  </td>
</tr>

<!-- TITULO -->
<tr>
  <td style="background:#ffffff;padding:30px 40px 16px;">
    <h2 style="margin:0 0 6px;color:#1e3a5f;font-size:20px;font-weight:700;">Formulario de Contacto</h2>
    <p style="margin:0;color:#666;font-size:14px;">Un cliente ha completado el formulario de contacto.</p>
    <p style="margin:8px 0 0;color:#aaa;font-size:12px;">{$fecha}</p>
  </td>
</tr>

<!-- DIVISOR -->
<tr>
  <td style="background:#ffffff;padding:0 40px 8px;">
    <div style="height:3px;background:linear-gradient(to right,#1e3a5f,#8dc63f);border-radius:2px;"></div>
  </td>
</tr>

<!-- DATOS DEL CLIENTE -->
<tr>
  <td style="background:#ffffff;padding:20px 40px 24px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="border:2px solid #dce8f5;border-radius:10px;overflow:hidden;">
      <tr><td style="background:#1e3a5f;padding:12px 20px;">
        <strong style="color:#8dc63f;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Datos del cliente</strong>
      </td></tr>
      <tr><td style="padding:20px 20px 8px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="150" style="padding:7px 0;color:#1e3a5f;font-weight:700;font-size:14px;vertical-align:top;">Nombre:</td>
            <td style="padding:7px 0;color:#333;font-size:14px;">{$nombre}</td>
          </tr>
          <tr>
            <td style="padding:7px 0;color:#1e3a5f;font-weight:700;font-size:14px;vertical-align:top;">Tel&eacute;fono:</td>
            <td style="padding:7px 0;color:#333;font-size:14px;">{$telefono}</td>
          </tr>
          <tr>
            <td style="padding:7px 0;color:#1e3a5f;font-weight:700;font-size:14px;vertical-align:top;">Email:</td>
            <td style="padding:7px 0;font-size:14px;"><a href="mailto:{$email}" style="color:#2d5a8e;font-weight:600;text-decoration:none;">{$email}</a></td>
          </tr>
          <tr>
            <td style="padding:7px 0;color:#1e3a5f;font-weight:700;font-size:14px;vertical-align:top;">Organizaci&oacute;n:</td>
            <td style="padding:7px 0;color:#333;font-size:14px;">{$organizacion}</td>
          </tr>
          <tr>
            <td style="padding:7px 0;color:#1e3a5f;font-weight:700;font-size:14px;vertical-align:top;">Regi&oacute;n:</td>
            <td style="padding:7px 0;color:#333;font-size:14px;">{$region}</td>
          </tr>
          <tr>
            <td style="padding:7px 0;color:#1e3a5f;font-weight:700;font-size:14px;vertical-align:top;">Comuna:</td>
            <td style="padding:7px 0;color:#333;font-size:14px;">{$comuna}</td>
          </tr>
          <tr>
            <td style="padding:7px 0;color:#1e3a5f;font-weight:700;font-size:14px;vertical-align:top;">Servicio:</td>
            <td style="padding:7px 0;">
              <span style="display:inline-block;background:#8dc63f;color:#fff;font-size:12px;font-weight:700;padding:4px 14px;border-radius:20px;">{$servicio}</span>
            </td>
          </tr>
        </table>
      </td></tr>
    </table>
  </td>
</tr>

<!-- MENSAJE -->
<tr>
  <td style="background:#ffffff;padding:0 40px 36px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="border:2px solid #dce8f5;border-radius:10px;overflow:hidden;">
      <tr><td style="background:#1e3a5f;padding:12px 20px;">
        <strong style="color:#8dc63f;font-size:12px;letter-spacing:2px;text-transform:uppercase;">Mensaje</strong>
      </td></tr>
      <tr><td style="padding:20px;background:#f7faff;color:#444;font-size:14px;line-height:1.7;">{$mensaje}</td></tr>
    </table>
  </td>
</tr>

<!-- FOOTER -->
<tr>
  <td style="background:#1e3a5f;padding:24px 40px;text-align:center;">
    <div style="margin-bottom:8px;">
      <span style="color:#8dc63f;font-weight:700;font-size:13px;letter-spacing:2px;">PROP&Oacute;SITO 180</span>
      <span style="color:#8da0c4;font-size:13px;font-weight:300;"> CONSULTING</span>
    </div>
    <a href="https://www.proposito180.cl" style="color:#8da0c4;font-size:12px;text-decoration:none;">www.proposito180.cl</a>
  </td>
</tr>

</table>
</td></tr></table>
</body></html>
HTML;

$to      = implode(', ', $destinatarios);
$headers = implode("\r\n", [
    'From: Proposito 180 <noreply@proposito180.cl>',
    'Reply-To: '.$nombre.' <'.$email.'>',
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
]);
$enviado = mail($to, $asunto, $html, $headers);
echo $enviado
    ? json_encode(['success'=>true,'message'=>'Mensaje enviado correctamente'])
    : json_encode(['success'=>false,'message'=>'Error al enviar. Escribenos a contacto@proposito180.cl']);
?>
