import React from 'react'
import { useEffect, useRef } from "react";

export default function Nodoble() {
    const letras = ["a", "b", "c", "d"];
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current) { // Solo ejecuta si es la primera vez
            letras.forEach((element) => console.log(element));
            hasRun.current = true; // Marca que ya se ejecutó
        }
    }, []);

    return (
        <div><strong>No doble</strong> (Revisar Consola)</div>
    )
}