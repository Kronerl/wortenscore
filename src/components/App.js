import './App.css';
import Logored from '../imagens/Worten-red.png';
import Logoblue from '../imagens/Worten-blue.png';



function App() {
  return (
    <div className="App">
      <div className="App-blender">

        
        <div className="left-side">

          <img className='Logos' src={Logored} />

        </div>

        <div className="center-side">

          <div className='titlediv'>
            <p className='title'> Worten Casa </p>
          </div>
          <div className='scoreboarddiv'>
            <div className='scoreboard'>

            </div>

          </div>

        </div>


        <div className="right-side">

          <img className='Logos' src={Logoblue} />

        </div>
          
          

      </div>
    </div>
  );
}

export default App;
