import { useState } from "react";

function BasicCalculator({ back }) {

    const [firstnumber, setFirstnumber] = useState(0);
    const [secondnumber, setSecondnumber] = useState(0);
    const [result, setResult] = useState(0);

    function sum(e) {
        e.preventDefault();
        const sum = firstnumber + secondnumber;
        //window.alert('The result is: ' + sum);
        setResult(sum);
    }
    function reset(e) {
        setResult(0);
        setFirstnumber(0);
        setSecondnumber(0);
    }

    return (
        <>
            <form >
                <h1>Calculator</h1>
                <label htmlFor="number1">Number 1</label>
                <br />
                <input
                    type="number"
                    placeholder='0'
                    value={firstnumber}
                    onChange={(e) => setFirstnumber(Number(e.target.value))} />
                <br />
                <label htmlFor="number2">Number 2</label>
                <br />
                <input
                    type="number"
                    placeholder='0'
                    value={secondnumber}
                    onChange={(e) => setSecondnumber(Number(e.target.value))} />
                <br />
                <button type='submit' onClick={(e) => sum(e)}>Sum</button>
                <button type='button' onClick={reset}> Reset</button>
                <p> The result is: {result}</p>
            </form>
            <button onClick={() => back('home')}>  ← Back</button>
        </>
    );
}
export default BasicCalculator;