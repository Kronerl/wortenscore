<?php

    include '../functions/db_connect.php';

  $count = 0;

  // Pesquisa
  $sql = "SELECT servico,quantidade FROM scores WHERE setor = 'loja';";


  // resultado total
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {

    // output data of each row
    while($row = $result->fetch_assoc()) {
      
      $count = $count + 1;
      $loja[$count] = $row["quantidade"];
      
    }

  } else {

    echo "Sem Resultados";

  }
  

  $conn->close();

?>