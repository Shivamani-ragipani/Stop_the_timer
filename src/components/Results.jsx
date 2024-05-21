import { forwardRef, useImperativeHandle } from 'react';
import {useRef} from 'react';
import {createPortal} from 'react-dom';

const Results = forwardRef(function Results({targetTimer, onReset, timeremaining}, ref){
    const dailog = useRef();

    const userlost = timeremaining <= 0;
    const formattedTime = (timeremaining / 1000).toFixed(2);
    const score = Math.round((1 - timeremaining / (targetTimer * 1000))* 100);

    useImperativeHandle(ref, () => {
        return {
            open(){
                dailog.current.showModal();
            }
        };
    })
    return createPortal(
    <>
    <dialog ref={dailog} className="result-modal">
        {userlost ? <h2>You Lost!</h2> : <h2>Your Score : {score}</h2>}
        <p>The Target time was <strong>{targetTimer} seconds.</strong></p>
        <p>You stopped the timer with <strong>{formattedTime} seconds left.</strong></p>
        <form method="dailog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
    </>,
    document.getElementById("modal")
    );
})

export default Results;