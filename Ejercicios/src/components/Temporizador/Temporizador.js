import React, { useState, useEffect } from "react";

export default function Temporizador() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        console.log("🟢 Componente montado: Iniciando Temporizador...");
            
        const interval = setInterval(() => {
            setSegundos(prevSegundos => prevSegundos + 1);
        }, 1000);
        
        return () => {
            console.log("🔴 Componente desmontado: Deteniendo Temporizador...");
            clearInterval(interval);
        };
    }, []);

    function ReiniciarTemporizador(){    
        setSegundos(0) // Aqui solo tuve que conocar int 0 y yo lo estaba colocando como "useState(0)" y me salía error
        console.log(`🔄 Contador Reiniciado en el numero: ${segundos} al 0`);
    }

  return (
    <div>
      <h2>Tiempo transcurrido: {segundos} segundos</h2>
      <button onClick={ReiniciarTemporizador}>Reiniciar</button>
    </div>
  );
}