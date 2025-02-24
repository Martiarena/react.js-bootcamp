import React, { useState, useRef, useEffect } from "react";

export default function ContadorHistorial() {
  const [contador, setContador] = useState(0);
  const prevContador = useRef(null);

  console.log("🔄 Renderizado");

  useEffect(() => {
    prevContador.current = contador;
  }, [contador]);

  function RestarContador(){
    contador > 0 && setContador(contador - 1)

    // Otros metodos de resta condicional:
    // setContador(prev => Math.max(prev - 1, 0));

  }

  return (
    <div>
      <h2>Contador con Historial</h2>
      <p>Valor actual: {contador}</p>
      <p>Valor anterior: {prevContador.current !== null ? prevContador.current : "-"}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={RestarContador}>Restar</button>
      <button onClick={() => setContador(0)}>Resetear</button>
    </div>
  );
}
