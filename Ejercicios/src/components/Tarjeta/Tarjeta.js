import React from "react";
import "./styles.css"; // Importa CSS externo
import styles from "./tarjeta.module.css"; // Importa CSS Modules

function Tarjeta({ titulo, descripcion, colorBorde, colorBackground }) {

  if (colorBorde === "") colorBorde = "gray";
  if (colorBackground === "") colorBackground = "lightgray";

  return (
    <div
      style={{ 
        border: `3px solid ${colorBorde}`, 
        background: `${colorBackground}`, 
        padding: "10px", 
        borderRadius: "8px", 
        margin: "10px"
      }} 
    >
      <h2 className={`titulo ${styles[colorBorde]}`}>{titulo}</h2> {/* CSS Externo */}
      <p className={`${styles.descripcion} ${styles[colorBorde]} ${styles.extraEstilo}`}>{descripcion}</p> {/* CSS Modules */}
    </div>
  );
}

export default Tarjeta;
