import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
import CounterControls from "./CounterControls";

const CounterDisplay = () => {
    const { counter } = useContext(CounterContext);

    return (
        <div>
            <div>
                <h4>Contador: {counter}</h4>
                <CounterControls />
            </div>
        </div>
    )
}

export default CounterDisplay;