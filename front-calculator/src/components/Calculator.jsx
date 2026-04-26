import { useState } from "react";
import Boton from "./Boton";
function CalculatorV2({ back }) {
    const [previous, setPrevious] = useState('');
    const [display, setDisplay] = useState('');
    const [operator, setOperator] = useState('');

    const clearDisplay = () => {
        setDisplay('0');
    }

    const deleteDisplay = () => {
        let current_value = display;
        if (current_value.length == 1 || (current_value.charAt(0) === '-' && current_value.length == 2)) {
            setDisplay('0');
        }

        setDisplay(current_value.slice(0, -1));
    }

    const setNumber = (value) => {
        setDisplay(
            (prev) => prev + value
        );
    }

    const handleOperator = (op) => {
        if (display === "") return;
        setPrevious(display);
        setDisplay('');
        setOperator(op);
    }

    const result = () => {
        const prev = parseInt(previous);
        const current = parseInt(display);
        let calculateResult = 0;
        switch (operator) {
            case "+":
                calculateResult = prev + current;
                break;
            case "-":
                calculateResult = prev - current;
                break;
            case "x":
                calculateResult = prev * current;
                break;
            case "/":
                calculateResult = current !== 0 ? prev / current : "Error";
                break;
            default:
                return;
        }
        setDisplay(calculateResult.toString());
        setPrevious("");
        setOperator("");
    }

    return (
        <>
            <h1>Complete Calculator </h1>
            <section>
                {display}
            </section>
            <section>
                <Boton label="DEL" onClick={deleteDisplay} />
                <Boton label='/' onClick={() => handleOperator('/')} />
                <Boton label='x' onClick={() => handleOperator('x')} />
                <Boton label='RMV' onClick={clearDisplay} />
            </section>
            <section>
                <Boton label='7' onClick={() => setNumber('7')} />
                <Boton label='8' onClick={() => setNumber('8')} />
                <Boton label='9' onClick={() => setNumber('9')} />
                <Boton label='-' onClick={() => handleOperator('-')} />

            </section>
            <section>
                <Boton label='4' onClick={() => setNumber('4')} />
                <Boton label='5' onClick={() => setNumber('5')} />
                <Boton label='6' onClick={() => setNumber('6')} />
                <Boton label='+' onClick={() => handleOperator('+')} />

            </section>
            <section>
                <Boton label='1' onClick={() => setNumber('1')} />
                <Boton label='2' onClick={() => setNumber('2')} />
                <Boton label='3' onClick={() => setNumber('3')} />
                <Boton label='=' onClick={result} />
            </section>
            <section>
                <Boton label='0' onClick={() => setNumber('0')} />
            </section>
            <section>
                <button onClick={back}> ← Back</button>
            </section>
        </>
    )
}
export default CalculatorV2;