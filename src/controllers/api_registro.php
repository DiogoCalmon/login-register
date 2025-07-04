<?php
    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    };

    require "../lib/funcoes.php";

    $dados_json = file_get_contents("php://input");
    $dados = json_decode($dados_json, true);

    if ($dados["confirmarSenha"] == $dados["senha"]){
        $resposta = [
            'status' => 'debug',
            'json_bruto' => $dados_json,
            'dados_decodificados' => $dados,
            'tipo_dados' => gettype($dados)
        ];

        adicionarFuncionario($dados);
    } else {
        $resposta = [
            'status' => 'debug',
            'json_bruto' => "tem, mas está errado",
            'dados_decodificados' => "estão errados",
            'tipo_dados' => gettype($dados)
        ];
    }

    // $resposta = [
    //     'status' => 'debug',
    //     'json_bruto' => $dados_json,
    //     'dados_decodificados' => $dados,
    //     'tipo_dados' => gettype($dados)
    // ];
    
    echo json_encode($resposta);
?>