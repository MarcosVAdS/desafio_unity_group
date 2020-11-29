<?php

    require_once "../models/candidato.php";

    $_candidato = new candidato();

    $saida = $_candidato->inserir();
    echo json_encode($saida);
?>