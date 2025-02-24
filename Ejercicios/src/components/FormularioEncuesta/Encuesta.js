import React, { useState } from "react";
import styles from "./style.module.css";
import Campoformulario from "./Campoformulario";
import Selectformulario from "./Selectformulario";
import TextAreaformulario from "./TextAreaformulario";
/* Campos con Componentes :D  */
export default function Encuesta() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    opinion: "",
    recomendar: ""
  });

  const [mensaje, setMensaje] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMensaje(
      `Nombre: ${formulario.nombre}\nApodo: ${formulario.apodo}\nOpinión: ${formulario.opinion}\n¿Recomendarías este sitio?: ${formulario.recomendar}`
    );
  }

  return (
    <>
      <h2 className={styles.titulo}>Encuesta de Opinión</h2>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <Campoformulario LabelText="Nombre" Name="nombre" Value={formulario.nombre} onChange={handleChange} />
        <Campoformulario LabelText="Apodo" Name="apodo" Value={formulario.apodo} onChange={handleChange} />
        <TextAreaformulario LabelText="Opinión" Name="opinion" Value={formulario.opinion} onChange={handleChange} />
        <Selectformulario LabelText="¿Recomendarías este sitio?" Name="recomendar" Value={formulario.recomendar} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>

      {mensaje && <pre>{mensaje}</pre>}
    </>
  );
}