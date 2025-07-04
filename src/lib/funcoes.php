<?php

    declare(strict_types=1);

    $listaDeUsuarios = [];
    function adicionarFuncionario(array $funcionario){
        global $listaDeUsuarios;
        $loginExiste = false;

        foreach ($listaDeUsuarios as $usuario) {
            if ($usuario["login"] === $funcionario["login"]) {
                $loginExiste = true;
                break;
            }
        }
        if (!$loginExiste) {
            $listaDeUsuarios[] = $funcionario;
        }
    }

    function verificarFuncionario(array $funcionario){
        global $listaDeUsuarios;
        $logins = array_column($listaDeUsuarios, "login");
    }
?>