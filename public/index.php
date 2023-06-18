<?php
    session_start();
    include '../functions/get_scores.php';

?>
<!DOCTYPE html>
<html lang="pt" dir="ltr">
  <head>
    <link rel = "stylesheet" href = "style.css">
    <link rel = "icon" type = "image/png" href = "./imagens/Worten_Logo.png">
    <meta charset="utf-8">
    <script src="./acessibilidade.js"></script>
    
    
    <title>Worten Champions</title>
  </head>
  <body>
      <div class="App-blender">
        
        <div class="corpo">
          <audio id="myAudio">
            <source src="../imagens/soccer-stadium-10-6709.mp3" type="audio/mp3">
  
             <p> O navegador não suporta reprodução de audio. </p>
  
          </audio>
          <p id="audioButton" class="audiobtn" onclick="toggleAudio()">
        
              <img class="LogoX" src="../imagens/sound.png" />
  
          </p>

          <!-- Editar menu -->


          <div class="form-popup" id="myForm">
            <form action="/action_page.php" class="form-container">
              <div class="pop-toppart">
                <div class="pop-body" >
                  <div class="pop-top" >

                    <div class="left-in-pop" >

                      <input type="text" name="loja_casa" placeholder= <?= $loja[1] ?> value= <?= $loja[1] ?>> 

                    </div>
                    <div class="mid-in-pop" >

                      <h5> - </h5>

                    </div>
                    <div class="right-in-pop" > 

                      <input type="text" name="resolve_casa" placeholder= <?= $resolve[1] ?> value= <?= $resolve[1] ?>>

                    </div>

                  </div>
                  <div class="pop-mid" >

                    <div class="left-in-pop" >

                      <input type="text" name="loja_tech" placeholder= <?= $loja[2] ?> value= <?= $loja[2] ?>>

                    </div>
                    <div class="mid-in-pop" >

                      <h5> - </h5>

                    </div>
                    <div class="right-in-pop" > 

                      <input type="text" name="resolve_tech" placeholder= <?= $resolve[2] ?> value= <?= $resolve[2] ?>>

                    </div>

                  </div>
                  <div class="pop-bottom" >

                    <div class="left-in-pop" >

                      <input type="text" name="loja_norton" placeholder= <?= $loja[3] ?> value= <?= $loja[3] ?>>

                    </div>
                    <div class="mid-in-pop" >

                      <h5> - </h5>

                    </div>
                    <div class="right-in-pop" > 

                      <input type="text" name="resolve_norton" placeholder= <?= $resolve[3] ?> value= <?= $resolve[3] ?>>

                    </div>

                  </div>
                </div>
              </div>

              <div class="pop-bottompart" >
              <form action="code.php" method="POST">
                <button type="submit" name="update_item" class="btn">Guardar</button>
                <button type="button" class="btn-cancel" onclick="closeForm()">Close</button>
              </form>
              </div>
            </form>
          </div>




          <div class="left-side">

            <img class="Logored" src="../imagens/Worten-red.png" />

          </div>
          <div class="center-side">

            <div class="pontuacao">


              <div class="casa-section">
                <div class="category-title">
                  
                  <p class="categorias"> Casa </p>

                </div>
                <div class="score-section">


                  <div class="in-score-section">

                    <p class="scores"> <?= $loja[1] ?> </p>

                  </div>
                  <div class="in-score-section">

                    <img class="LogoX" src="../imagens/X.png" />

                  </div>
                  <div class="in-score-section">

                    <p class="scores"> <?= $resolve[1] ?> </p>

                  </div>


                </div>
              </div>


              <div class="tech-section">
                <div class="category-title">
                  
                  <p class="categorias"> Tech </p>

                </div>
                <div class="score-section">


                  <div class="in-score-section">

                    <p class="scores"> <?= $loja[2] ?> </p>

                  </div>
                  <div class="in-score-section">


                    <button class="editar" onclick="openForm()"> 
                      
                      <img class="LogoX2" src="../imagens/X.png" /> 

                    </button>
                    
                  </div>
                  <div class="in-score-section">

                    <p class="scores"> <?= $resolve[2] ?> </p>

                  </div>


                </div>
              </div>


              <div class="norton-section">
                <div class="category-title">
                  
                  <p class="categorias"> Norton </p>


                </div>
                <div class="score-section">


                  <div class="in-score-section">

                    <p class="scores"> <?= $loja[3] ?> </p>

                  </div>
                  <div class="in-score-section">

                    <img class="LogoX" src="../imagens/X.png" />

                  </div>
                  <div class="in-score-section">

                    <p class="scores"> <?= $resolve[3] ?> </p>

                  </div>


                </div>
              </div>


            </div> 
          </div>
          <div class="right-side">

            <img class="Logoblue" src="../imagens/Worten-blue.png" />

          </div>

        </div>
        

      </div>

      <script>

        var audio = document.getElementById("myAudio");
        var audioButton = document.getElementById("audioButton");

        function toggleAudio() {
        if (audio.paused) {

          audio.play();
                
        } else {

          audio.pause();
                  
          }
        }
      </script>

      
    
  </body>
</html>