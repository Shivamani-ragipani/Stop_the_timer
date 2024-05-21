import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTimer={1}/>
        <TimerChallenge title="Hard" targetTimer={5}/>
        <TimerChallenge title="Expert" targetTimer={10}/>
        <TimerChallenge title="Ace" targetTimer={15}/>
      </div>
    </>
  );
}

export default App;
