<?php

    declare(strict_types=1);

    $listaDeUsuarios = [];

    function adicionarFuncionario(array $funcionario){
        global $listaDeUsuarios;
        for ($i = 0, $l = count($listaDeUsuarios); $i <= $l; $i++){
            if (!$listaDeUsuarios[$i].in_array($funcionario["login"], $listaDeUsuarios)){
                $listaDeUsuarios[] = $funcionario;
            }
        }
        print_r($listaDeUsuarios);
    }
?>