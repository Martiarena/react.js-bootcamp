import React, { useState, useRef, useEffect } from "react";

export default function Temporizador4() {
    const [tiempo, setTiempo] = useState(0);
    const intervaloRef = useRef(null); // 👉 Aquí debes almacenar el intervalo

    useEffect(() => {
        iniciarTemporizador(); // ⚡ Inicia automáticamente al montar
    
        return () => {
          clearInterval(intervaloRef.current); // 🛑 Limpia el intervalo al desmontar
        };
    }, []);

    function iniciarTemporizador() {
        // 🚀 Debes iniciar el intervalo solo si no existe uno activo
        if (!intervaloRef.current) { // 🚀 Solo inicia si no hay un intervalo activo
            intervaloRef.current = setInterval(() => {
                setTiempo(prevTiempo => prevTiempo + 1);
            }, 1000);
        }
    }

    function pausarTemporizador() {
        // 🛑 Debes detener el intervalo sin reiniciar el contador
        clearInterval(intervaloRef.current); // 🛑 Detiene el intervalo
        intervaloRef.current = null; // Limpia la referencia
    }

    function reiniciarTemporizador() {
        // 🔄 Debes reiniciar el contador y el intervalo
        pausarTemporizador(); // Detiene el intervalo
        setTiempo(0);
        iniciarTemporizador(); // Lo reinicia
    }

    return (
        <div>
            <h2>Temporizador con useRef</h2>
            <input type="text" value={tiempo} readOnly />
            <br />
            <button onClick={iniciarTemporizador}>Iniciar</button>
            <button onClick={pausarTemporizador}>Pausar</button>
            <button onClick={reiniciarTemporizador}>Reiniciar</button>
        </div>
    );
}