import React, { useState, useCallback } from "react";
import BotonIncrementar from "./BotonIncrementar";

export default function Contador() {
  const [contador, setContador] = useState(0);
  
  // Envolver en useCallback para que no cambie en cada render
  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <BotonIncrementar incrementar={incrementar} />
    </div>
  );
}
