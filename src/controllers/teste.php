<?php
header("Access-Control-Allow-Origin: *"); // ou a porta do seu React
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type"); // , Authorization, X-Requested-With

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

echo json_encode(['status' => 'teste funcionou']);
?>