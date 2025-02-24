import React, { useState } from "react";

export default function FormularioRegistro() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    edad: ""
  });
  const [mensaje, setMensaje] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMensaje(`Nombre: ${formulario.nombre}\nCorreo: ${formulario.correo}\nEdad: ${formulario.edad}`);
  }

  return (
    <div>
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange} />
        </div>
        <div>
            <label>Correo:</label>
            <input type="email" name="correo" value={formulario.correo} onChange={handleChange} />
        </div>
        <div>
            <label>Edad:</label>
            <input type="number" name="edad" value={formulario.edad} onChange={handleChange} />
        </div>
        <div>
            <button type="submit">Registrar</button>
        </div>
      </form>

      {mensaje && <pre>{mensaje}</pre>}
    </div>
  );
}
