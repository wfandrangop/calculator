import { useState } from "react";

function Calculator({ back }) {
    const [display, setDisplay] = useState("0");

    const deleteNumber = () => {
        const strDisplay = String(display);
        const temporalNumber = String(display).slice(0, -1);
        if (strDisplay.length == 1 || (strDisplay.length === 2 && strDisplay.startsWith('-'))) {
            setDisplay("0");
            return
        }
        setDisplay(temporalNumber);
    }

    const setNumber = (number) => {
        if (display.charAt(0) === "0" && display.length == 1) {
            setDisplay(number);
        } else {
            setDisplay(display + number);
        }
    }
    const deleteAll = () => {
        setDisplay('0');
    }
    const dividing = () => {

    }

    return (
        <>
            <h1>Complete Calculator</h1>
            <p> {display}</p>
            <button onClick={deleteNumber}>DEL</button>
            <button onClick={dividing}>/</button>
            <button >X</button>
            <button onClick={deleteAll}>AC</button>
            <br />
            <button onClick={() => setNumber('7')}>7</button>
            <button onClick={() => setNumber('8')}>8</button>
            <button onClick={() => setNumber('9')}>9</button>
            <button >-</button>
            <br />
            <button onClick={() => setNumber('4')}>4</button>
            <button onClick={() => setNumber('5')}>5</button>
            <button onClick={() => setNumber('6')}>6</button>
            <button  >+</button>
            <br />
            <button onClick={() => setNumber('1')}>1</button>
            <button onClick={() => setNumber('2')}>2</button>
            <button onClick={() => setNumber('3')}>3</button>
            <button >=</button>
            <br />
            <button onClick={() => setNumber('0')}>0</button>
            <br />
            <button onClick={() => back('home')}>Back</button>
        </>
    );
}
export default Calculator;