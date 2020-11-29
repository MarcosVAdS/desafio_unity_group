<?php
    require_once "../models/candidato.php";

    $_candidato = new candidato();

    $saida = $_candidato->listar_candidatos();
    echo json_encode($saida);
?>