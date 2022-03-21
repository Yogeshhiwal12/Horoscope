import React, { useState} from 'react'
import './App.css';
import { Horoscope } from './components/Horoscope';
import { SelectSign } from './components/SelectSign';
import { SelectTimeframe } from './components/SelectTimeframe';



function App() {
  
  const [selectedSign, setSelectedSign]=useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState(null);
  
  const restart = ()=>{
    setSelectedSign(null);
    setSelectedTimeframe(null);
  }

  return (
    <>
    <div className="container " style={{overflow:'hidden'}}>
      <h1 className='text-center m-3'>The Horoscope App</h1>
    <div className="App mt-3">
      
      {!selectedSign && (
      <SelectSign onSignSelected={setSelectedSign}/>
      )}
      {selectedSign && !selectedTimeframe && (<SelectTimeframe onTimeframeSelected={setSelectedTimeframe}/>)}
      {selectedSign && selectedTimeframe&&(
      <Horoscope
        sign={selectedSign}
        timeframe={selectedTimeframe}
      
      />)}
     
    </div>
    <div className=' d-flex justify-content-center p-5'>
     <button onClick={restart} className="btn btn-primary">Restart</button>
     </div>
    </div>
    
     </>
  );
}

export default App;
