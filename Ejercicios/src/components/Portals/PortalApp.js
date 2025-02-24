import React, { useState, useEffect } from "react";
import Modal from './Modal';

export default function PortalApp() {
    const [modalAbierto, setModalAbierto] = useState(false);
    
    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                console.log("Enter key pressed");
                setModalAbierto(true);
            }
        };
    
        window.addEventListener("keydown", handleKeyPress);
    
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);



    return (
        <div>
            <h1>Ejercicio con React Portals</h1>
            <button onClick={() => setModalAbierto(true)}>Abrir Modal</button>
            
            <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)} />
        </div>
    )
}
