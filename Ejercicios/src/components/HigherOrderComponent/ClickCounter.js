import React from "react";
import withCounter from "./withCounter";

const ClickCounter = ({ count, incrementCount, name }) => {
    return <button onClick={incrementCount}>{name} Clicked {count} times</button>;
};

export default withCounter(ClickCounter, 5);