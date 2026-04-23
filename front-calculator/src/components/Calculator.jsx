import { useReducer } from "react";
import Boton from "./Boton";

const ACTIONS = {
    INPUT_DIGIT: "INPUT_DIGIT",
    INPUT_DECIMAL: "INPUT_DECIMAL",
    SET_OPERATOR: "SET_OPERATOR",
    CALCULATE: "CALCULATE",
    CLEAR: "CLEAR",
    DELETE: "DELETE",
    TOGGLE_SIGN: "TOGGLE_SIGN",
    INPUT_PERCENT: "INPUT_PERCENT",
};

const initialState = {
    display: "0",
    previous: null,
    operator: null,
    overwrite: false,
};

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "×": (a, b) => a * b,
    "÷": (a, b) => {
        if (b === 0) return "Error";
        return a / b;
    },

};
function formatResult(value) {
    if (value === "Error") return "Error";
    const num = parseFloat(value);
    if (isNaN(num)) return "Error";
    // Máximo 10 dígitos significativos para evitar overflow en display
    const formatted = parseFloat(num.toPrecision(10));
    return String(formatted);
}

function calculatorReducer(state, { type, payload }) {
    switch (type) {

        case ACTIONS.INPUT_DIGIT: {
            if (state.overwrite) {
                return { ...state, display: payload.digit, overwrite: false };
            }
            if (state.display === "0" && payload.digit === "0") return state;
            if (state.display === "0") {
                return { ...state, display: payload.digit };
            }
            return { ...state, display: state.display + payload.digit };
        }

        case ACTIONS.INPUT_DECIMAL: {
            if (state.overwrite) {
                return { ...state, display: "0.", overwrite: false };
            }
            if (state.display.includes(".")) return state;
            return { ...state, display: state.display + "." };
        }

        case ACTIONS.SET_OPERATOR: {
            const { operator } = payload;
            if (state.operator && !state.overwrite) {
                const fn = operations[state.operator];
                if (!fn) return state;
                const result = fn(parseFloat(state.previous), parseFloat(state.display));
                const formatted = formatResult(result);
                return {
                    ...state,
                    display: formatted,
                    previous: formatted,
                    operator,
                    overwrite: true,
                };
            }
            return {
                ...state,
                previous: state.display,
                operator,
                overwrite: true,
            };
        }

        case ACTIONS.CALCULATE: {
            if (!state.operator || state.previous == null || state.overwrite) {
                return state;
            }
            const fn = operations[state.operator];
            if (!fn) return state;
            const result = fn(parseFloat(state.previous), parseFloat(state.display));
            const formatted = formatResult(result);
            return {
                ...initialState,
                display: formatted,
                overwrite: true,
            };
        }

        case ACTIONS.CLEAR:
            return initialState;

        case ACTIONS.DELETE: {
            if (state.overwrite || state.display === "Error") {
                return { ...state, display: "0", overwrite: false };
            }
            if (state.display.length === 1) {
                return { ...state, display: "0" };
            }
            if (state.display.length === 2 && state.display.startsWith("-")) {
                return { ...state, display: "0" };
            }
            return { ...state, display: state.display.slice(0, -1) };
        }

        case ACTIONS.TOGGLE_SIGN: {
            if (state.display === "0" || state.display === "Error") return state;
            const toggled = state.display.startsWith("-")
                ? state.display.slice(1)
                : "-" + state.display;
            return { ...state, display: toggled };
        }

        case ACTIONS.INPUT_PERCENT: {
            if (state.display === "Error") return state;
            const percent = parseFloat(state.display) / 100;
            return { ...state, display: formatResult(percent) };
        }

        default:
            return state;
    }
}

function Calculator({ back }) {

    const [state, dispatch] = useReducer(calculatorReducer, initialState);
    const inputDigit = (digit) => dispatch({ type: ACTIONS.INPUT_DIGIT, payload: { digit } });
    const setOperator = (operator) => dispatch({ type: ACTIONS.SET_OPERATOR, payload: { operator } });
    const inputDecimal = () => dispatch({ type: ACTIONS.INPUT_DECIMAL });
    const calculate = () => dispatch({ type: ACTIONS.CALCULATE });
    const clear = () => dispatch({ type: ACTIONS.CLEAR });
    const deleteLast = () => dispatch({ type: ACTIONS.DELETE });
    const toggleSign = () => dispatch({ type: ACTIONS.TOGGLE_SIGN });
    const inputPercent = () => dispatch({ type: ACTIONS.INPUT_PERCENT });

    const expressionLabel = state.operator && state.previous != null ? `${state.previous} ${state.operator}` : "";

    return (
        <>
            <div>
                <span style={{ color: 'gray', display: 'flex' }}> {expressionLabel} </span>
                <span> {state.display}  </span>
            </div>
            <main >
                <section>
                    <Boton label="DEL" onClick={deleteLast} variant="function" />
                    <Boton label="%" onClick={inputPercent} variant="function" />
                    <Boton label="÷" onClick={() => setOperator("÷")} variant="operator" />
                    <Boton label="AC" onClick={clear} variant="danger" />
                </section>
                <section>
                    <Boton label="7" onClick={() => inputDigit("7")} />
                    <Boton label="8" onClick={() => inputDigit("8")} />
                    <Boton label="9" onClick={() => inputDigit("9")} />
                    <Boton label="×" onClick={() => setOperator("×")} variant="operator" />
                </section>
                <section>
                    <Boton label="4" onClick={() => inputDigit("4")} />
                    <Boton label="5" onClick={() => inputDigit("5")} />
                    <Boton label="6" onClick={() => inputDigit("6")} />
                    <Boton label="-" onClick={() => setOperator("-")} variant="operator" />
                </section>
                <section>
                    <Boton label="1" onClick={() => inputDigit("1")} />
                    <Boton label="2" onClick={() => inputDigit("2")} />
                    <Boton label="3" onClick={() => inputDigit("3")} />
                    <Boton label="+" onClick={() => setOperator("+")} variant="operator" />
                </section>
                <section>
                    <Boton label="0" onClick={() => inputDigit("0")} />
                    <Boton label="." onClick={inputDecimal} />
                    <Boton label="+/-" onClick={toggleSign} variant="function" />
                    <Boton label="=" onClick={calculate} variant="equals" />
                </section>
            </main>
            <br />
            <button onClick={() => back("home")} >
                ← Volver
            </button>
        </>
    );
}
export default Calculator;