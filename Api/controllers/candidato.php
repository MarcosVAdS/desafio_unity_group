<?php
    require_once "../models/candidato.php";

    $_candidato = new candidato();

    $saida = $_candidato->obter_candidato();
    echo json_encode($saida);
?>