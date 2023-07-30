import './App.css';
import React, { useState } from 'react';
import LengthControl from './components/LengthControl';
import Timer from './components/Timer';

function App() {

  let [breakMins, setBreakMins] = useState(5);
  let [sessMins, setSessMins] = useState(25);
  let [MM, setMM] = useState(sessMins);
  let [SS, setSS] = useState(59);
  let [toggle, setToggle] = useState(false);

  const increase = (mins, name) => {
      return (mins <= 60) && (mins >= 0) && (name === "break") ? setBreakMins(++mins) : 
      (mins <= 60) && (mins >= 0) && (name === "session") ? setSessMins(++mins) : 0;
  }

  const decrease = (mins, name) => {
      return (mins <= 60) && (mins > 0) && (name === "break") ? setBreakMins(--mins) : 
      (mins <= 60) && (mins > 0) && (name === "session") ? setSessMins(--mins) : 0;
  }

  const startStop = () => {
    setToggle(false);

    if (!toggle) { 

      setInterval(() => {
      setSS(--SS);
      }, 1000);

      setInterval(() => {
      setMM(--MM);
      }, 60000)
    }
  }
  
  return (
    <div className="App">
      <div className='main'>
        <label>25 + 5 Clock</label>
        <div className='setup-panel'>
          <LengthControl name='break' id='break-length' inc={increase} dec={decrease} value={breakMins} />
          <LengthControl name='session' id='session-length' inc={increase} dec={decrease} value={sessMins} />
        </div>
        <div className='timer-panel'>
          <Timer minutes={MM} seconds={SS} />
          <div class="panel">
            <button id="start_stop" onClick={startStop}>{">"} ||</button>
            <button id="reset">re</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
