import { useState, useRef } from 'react';

export default function Player() {

  const PlayerName = useRef();

  const [enteredPlayerName, setPlayerName] = useState(null);

  function HandleClick(){
   setPlayerName(PlayerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'undefined name'}</h2>
      <p>
        <input ref={PlayerName} type="text" />
        <button onClick={HandleClick}>Set Name</button>
      </p>
    </section>
  );
}
