<?php
 
 include '../functions/get_scores_loja.php';
 include '../functions/get_scores_resolve.php';


 function pre_r($array){

   echo '<pre>';
   print_r($array);
   echo '</pre>';

 }
  
/*
 pre_r($loja);
 pre_r($resolve);
 */

?>