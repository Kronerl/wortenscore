import './App.css';
import { useState } from 'react'
import Logored from '../imagens/Worten-red.png';
import Logoblue from '../imagens/Worten-blue.png';
import LogoX from '../imagens/X.png';



function App() {
  const [count, setCount] = useState(0)

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

                      <p className='score-font'> 5 </p>

                    </div>
                    <div className='score-section'>

                      <img className='LogoX' src={LogoX} />

                    </div>
                    <div className='score-section'>

                      <p className='score-font'> 2 </p>

                    </div>
                  </div>




              
                <div className='score-wortentech'>

                  <p className='title'>Worten Tech</p>

                </div>
                <div className='scores'>
                  <div className='score-section'>

                    <p className='score-font'> 9 </p>

                  </div>
                  <div className='score-section'>

                    <img className='LogoX' src={LogoX} />

                  </div>
                  <div className='score-section'>

                    <p className='score-font'> 8 </p>

                  </div>
                </div>






                <div className='score-wortenge'>

                  <p className='title'> Norton </p>

                </div>
                <div className='scores'>
                  <div className='score-section'>

                    <p className='score-font'> 5 </p>

                  </div>
                  <div className='score-section'>

                    <img className='LogoX' src={LogoX} />

                  </div>
                  <div className='score-section'>

                    <p className='score-font'> 2 </p>

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
