import React, { useState } from "react";
import { CounterContext } from "./CounterContext";

const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const incrementar = () => setCounter(prev => prev + 1); // Evitar renders innecesarios por la Asincronia de Javascript
    const restar = () => setCounter(prev => prev - 1); // Evitar renders innecesarios por la Asincronia de Javascript

    return (
        <CounterContext.Provider value={{ counter, incrementar, restar }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterProvider;
