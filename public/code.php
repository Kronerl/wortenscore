<?php
    session_start();
    require '../functions/db_connect.php';

    $loja_casa= mysqli_real_escape_string($conn, $_POST['loja_casa']);
    $resolve_casa= mysqli_real_escape_string($conn, $_POST['resolve_casa']);
    $loja_tech= mysqli_real_escape_string($conn, $_POST['loja_tech']);
    $resolve_tech= mysqli_real_escape_string($conn, $_POST['resolve_tech']);
    $loja_norton= mysqli_real_escape_string($conn, $_POST['loja_norton']);
    $resolve_norton= mysqli_real_escape_string($conn, $_POST['resolve_norton']);

    $query = "UPDATE scores SET quantidade = $loja_casa WHERE setor ='Loja' and servico ='casa' ";
    $query1 = "UPDATE scores SET quantidade = $resolve_casa WHERE setor ='Resolve' and servico ='casa' ";
    $query2 = "UPDATE scores SET quantidade = $loja_tech WHERE setor ='Loja' and servico ='tech' ";
    $query3 = "UPDATE scores SET quantidade = $resolve_tech WHERE setor ='Resolve' and servico ='tech' ";
    $query4 = "UPDATE scores SET quantidade = $loja_norton WHERE setor ='Loja' and servico ='norton' ";
    $query5 = "UPDATE scores SET quantidade = $resolve_norton WHERE setor ='Resolve' and servico ='norton' ";
        


    $query_run = mysqli_query($conn, $query);
    $query_run1 = mysqli_query($conn, $query1);
    $query_run2 = mysqli_query($conn, $query2);
    $query_run3 = mysqli_query($conn, $query3);
    $query_run4 = mysqli_query($conn, $query4);
    $query_run5 = mysqli_query($conn, $query5);
        
        
   
        
    header("Location: index.php");
    exit(0);
        

?>