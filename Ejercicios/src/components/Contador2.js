import React, { useState, useEffect } from "react";

export default function Contador2() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("🟢 Componente montado: Iniciando contador...");
    
    const interval = setInterval(() => {
      setContador(prevContador => prevContador + 1);
    }, 1000);

    return () => {
      console.log("🔴 Componente desmontado: Deteniendo contador...");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(`🔄 Contador actualizado: ${contador}`);
  }, [contador]);

  return (
    <div>
      <h2>Contador: {contador}</h2>
    </div>
  );
}
