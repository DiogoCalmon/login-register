<?php
    header("Access-control-Allow-Origin: https://localhost:5173");
    header("Access-control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    };

    $dados_json = file_get_contents("php://input");// Por enquanto eu não sei oq esse código faz..
    // eu só sei que de alguma forma, ele pega o JSON que eu mandei pelo meu React
    if ($dados_json === null){
        echo "está vazio";
    }

    echo "oi";
    $form_objeto = json_decode($dados_json);


?>