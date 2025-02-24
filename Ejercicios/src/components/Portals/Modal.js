import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Style from "./style.module.css"

export default function Modal({ isOpen, onClose }) {
    const modalRef = useRef(null); // 👉 Referencia al modal
    
    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.focus(); // 🔥 Enfocar el modal al abrirse
        }
    }, [isOpen]);

    if (!isOpen) return null;

    // onKeyDown={(e) => {if (e.key === "Enter") {console.log("Enter key pressed");onClose();}}}
    // Traducción a Función:

    function handleKeyDown(e) {
        if (e.key === "Escape") {
            console.log("Escape key pressed");
            onClose();
        }
    }

    return ReactDOM.createPortal(    
        <div className={Style.modaloverlay} onClick={onClose} onKeyDown={handleKeyDown}>
            <div className={Style.modalcontent} ref={modalRef} tabIndex={-1} onClick={e => {e.stopPropagation();}}>
                <h2>¡Soy un modal! 🎉</h2>
                <p>Este modal se renderiza fuera del root con Portals.</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>,
        document.getElementById("modal-root") // Renderizar fuera del root
    );
}