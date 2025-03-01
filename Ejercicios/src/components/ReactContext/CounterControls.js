import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterControls = () => {
  const { incrementar, restar } = useContext(CounterContext);
  
  return (
    <div>
      <button style={styles.button} onClick={incrementar}>+</button>
      <button style={styles.button} onClick={restar}>-</button>
    </div>
  );
};

const styles = {
  button: {
    margin: "5px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default CounterControls;
