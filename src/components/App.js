import './App.css';
import { useState } from 'react'
import Logored from '../imagens/Worten-red.png';
import Logoblue from '../imagens/Worten-blue.png';
import LogoX from '../imagens/X.png';



function App() {
  const [score_casa_loja, setscore_casa_loja] = useState(5)
  const [score_casa_resolve, setscore_casa_resolve] = useState(2)
  const [score_tech_loja, setscore_tech_loja] = useState(9)
  const [score_tech_resolve, setscore_tech_resolve] = useState(8)
  const [score_norton_loja, setscore_norton_loja] = useState(5)
  const [score_norton_resolve, setscore_norton_resolve] = useState(2)

  return (
    <div className="App">
      <div className="App-blender">

        
        <div className="left-side">

          <img className='Logored' src={Logored} />

        </div>

        <div className="center-side">

          <div className='titlediv'>
            {/* <p className='title'> Worten Casa </p> */}
          </div>
          <div className='scoreboarddiv'>

            <div className='scoreboard'>

              {/* <button className='count' onClick={() => setCount((count) => count + 1)}>
                  {count}
              </button> */}
              

                  <div className='score-wortencasa'>

                    <p className='title'> Worten Casa </p>

                  </div>
                  <div className='scores'>
                    <div className='score-section'>

                      <p className='score-font' onClick={() => setscore_casa_loja((score_casa_loja) => score_casa_loja + 1)}> {score_casa_loja} </p>

                    </div>
                    <div className='score-section'>

                      <img className='LogoX' src={LogoX} />

                    </div>
                    <div className='score-section'>

                      <p className='score-font' onClick={() => setscore_casa_resolve((score_casa_resolve) => score_casa_resolve + 1)}> {score_casa_resolve} </p>

                    </div>
                  </div>




              
                <div className='score-wortentech'>

                  <p className='title'>Worten Tech</p>

                </div>
                <div className='scores'>
                  <div className='score-section'>

                  <p className='score-font' onClick={() => setscore_tech_loja((score_tech_loja) => score_tech_loja + 1)}> {score_tech_loja} </p>

                  </div>
                  <div className='score-section'>

                    <img className='LogoX' src={LogoX} />

                  </div>
                  <div className='score-section'>

                  <p className='score-font' onClick={() => setscore_tech_resolve((score_tech_resolve) => score_tech_resolve + 1)}> {score_tech_resolve} </p>

                  </div>
                </div>






                <div className='score-wortenge'>

                  <p className='title'> Norton </p>

                </div>
                <div className='scores last'>
                  <div className='score-section'>

                    <p className='score-font' onClick={() => setscore_norton_loja((score_norton_loja) => score_norton_loja + 1)}> {score_norton_loja} </p>

                  </div>
                  <div className='score-section'>

                    <img className='LogoX' src={LogoX} />

                  </div>
                  <div className='score-section'>

                  <p className='score-font' onClick={() => setscore_norton_resolve((score_norton_resolve) => score_norton_resolve + 1)}> {score_norton_resolve} </p>

                  </div>
                </div>





            </div>

          </div>

        </div>


        <div className="right-side">

          <img className='Logoblue' src={Logoblue} />

        </div>
          
          

      </div>
    </div>
  );
}

export default App;
