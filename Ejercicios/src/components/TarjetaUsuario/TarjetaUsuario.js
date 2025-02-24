import React from 'react'
import "./styles.css";
import styles from "./styles.module.css"

export default function TarjetaUsuario({nombre, edad, colorFondo}) {
  return (
    <div style={{ 
        background: `${colorFondo}`,
        padding: "1vw",
        borderRadius: "10px",
      }} >
      <h2 className="nombre">{nombre}</h2>
      <p className={styles.edadTxt}><strong>Edad:</strong> {edad}</p>
      <p>Ut a ullamcorper orci, eget consectetur justo. Aenean pretium imperdiet odio, quis condimentum velit tristique vel. Nam a lacus neque. Mauris nec leo condimentum, pulvinar velit id, tincidunt turpis. Nunc congue bibendum blandit. Curabitur quis molestie tortor, id mattis leo. Mauris ullamcorper laoreet metus. Proin eu urna ac elit sagittis luctus quis a ex.</p>
    </div>
  )
}
