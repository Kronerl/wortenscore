<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $database = "worten_champions";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);

  // Check connection
  if (!$conn) {
    echo ("Connection error: " . mysqli_connect_error());
  }
  

?>