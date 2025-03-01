import React from "react";
import MouseTracker from "./MouseTracker"

export default function App() {
  return (
    <MouseTracker render={({ x, y }) => (
      <h1>Posición del mouse: ({x}, {y})</h1>
    )} />
  );
}
