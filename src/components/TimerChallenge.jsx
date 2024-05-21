import { useState, useRef } from 'react';
import Results from './Results.jsx';

export default function TimerChallenge({ title, targetTimer}){

    const timer = useRef();
    const dailog = useRef();

  const [TimeRemainig, setTimeRemaining] = useState(targetTimer * 1000);

  const TimerIsActive = TimeRemainig > 0 && TimeRemainig < targetTimer * 1000;

  
  if(TimeRemainig <= 0){
    clearInterval(timer.current);
    dailog.current.open();
}       

    function HandleStart(){
       timer.current = setInterval(()=> {
         setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);   
        }, 10);
    } 

    function HandleReset(){
        setTimeRemaining(targetTimer * 1000);
    }

    function HandleStop(){
        dailog.current.open();
        clearInterval(timer.current);
    }
    
    return (
    <>
        <Results ref={dailog} targetTimer={targetTimer} timeremaining={TimeRemainig} onReset={HandleReset}/>
    <section className="challenge" >
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTimer} second{targetTimer > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={TimerIsActive ? HandleStop : HandleStart }> 
            {TimerIsActive ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={TimerIsActive ? 'active' : ''}>
            {TimerIsActive ?'Time is Running...' : 'TImer inactive'}
        </p>

    </section>
    </>
    );
}