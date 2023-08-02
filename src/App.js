import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import LengthControl from './components/LengthControl';
import Timer from './components/Timer';
import beep from './audio/arcade-beep.wav';

function App() {

  const initValSess = 25;
  const initValBreak = 5;

  let [breakMins, setBreakMins] = useState(initValBreak);
  let [sessMins, setSessMins] = useState(initValSess);
  let [MM, setMM] = useState(/^\d$/.test(sessMins) ? `0${sessMins}` : sessMins);
  let [SS, setSS] = useState('00');
  let [toggle, setToggle] = useState(true);
  let period = useRef('Session');

  // increases session and break minutes. Session minutes are also changed in Timer component.
  const increase = (mins, name) => {
    if (mins < 60 && mins >= 0 && name === "break") {
      setBreakMins(++mins);
    } else if (mins < 60 && mins >= 0 && name === "session" && toggle) {
      let m = ++mins;
      setSessMins(m);
      setMM(/^[\d]$|^0[1-9]/.test(mins) ? `0${m}` : m);
    }
  }

  // decreases session and break minutes. Session minutes are also changed in Timer component.
  const decrease = (mins, name) => {
    if (mins <= 60 && mins > 1 && name === "break") {
      setBreakMins(--mins);
    } else if (mins <= 60 && mins > 1 && name === "session" && toggle) {
      let m = --mins;
      setSessMins(m);
      setMM(/^[\d]$|^0[1-9]/.test(mins) ? `0${m}` : m);
    }
  }

  useEffect(() => {
    let mins; // auxiliary variable
    if (toggle === false) {
      var timer = setTimeout(() => {
      setSS(MM === '00' && SS === '00' ? '00' : SS === "00" ? 59 : /^[\d]$|^0[1-9]|10/.test(SS) ? `0${--SS}` : SS === '01' ? '00' : --SS); // counts seconds in Timer component like 00, 59, 58, ..., 02, 01, 00.

      mins = MM === '00' && SS === '00' && period.current === 'Session' ? breakMins 
      : MM === '00' && SS === '00' && period.current === 'Break' ? sessMins
      : SS === "00" ? --MM : MM; // mins is used in sake of convenience of assignment.
      setMM(/^\d$/.test(mins) ? `0${mins}` : mins); // counts seconds in Timer component like 00, 59, 58, ..., 02, 01, 00.
      
      // assigns appropriate period label and plays a beep sound when certain conditions are met.
      if (MM === '00' && SS === '00' && period.current === 'Session') {
        period.current = 'Break';
        document.getElementById('beep').play();
      } else if (MM === '00' && SS === '00' && period.current === 'Break') {
        period.current = 'Session';
        document.getElementById('beep').play();
      }
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [MM, SS, toggle, breakMins, sessMins]);

  const reset = () => {
    setToggle(true);
    setBreakMins(initValBreak);
    setSessMins(initValSess);
    setMM(/^\d$/.test(initValSess) ? `0${initValSess}` : initValSess);
    setSS('00');
    period.current = 'Session';
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
          <Timer minutes={MM} seconds={SS} isPeriod={period.current} />
          <audio id='beep' src={beep}></audio>
          <div class="panel">
            <button id="start_stop" onClick={() => setToggle(!toggle)}>{">"} ||</button>
            <button id="reset" onClick={reset}>reset</button>
            <p></p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
