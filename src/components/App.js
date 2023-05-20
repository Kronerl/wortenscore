import './App.css';
import { useState } from 'react'
import Logored from '../imagens/Worten-red.png';
import Logoblue from '../imagens/Worten-blue.png';



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
            <p className='title'> Worten Casa </p>
          </div>
          <div className='scoreboarddiv'>

            <div className='scoreboard'>


              <button className='count' onClick={() => setCount((count) => count + 1)}>
                  {count}
              </button>
              <div>

                  <p className='title'> Worten Tech</p>

              </div>

              <div>

                  <p className='title'> Garrantia</p>

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
