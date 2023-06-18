<?php
  $servername = "localhost";
  $username = "id20802024_main";
  $password = "Mutymuty_2002";
  $database = "worten_champions";

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);

  // Check connection
  if (!$conn) {
    echo ("Connection error: " . mysqli_connect_error());
  }
  

?>