import React, { useState, useEffect } from "react";

export default function UsuarioAleatorio() {
  const [usuario, setUsuario] = useState(null);

  // Función para obtener usuario aleatorio
  function obtenerUsuario() {
    fetch("https://randomuser.me/api/") // Petición a la API
      .then(response => response.json()) // Convertimos la respuesta a JSON
      .then(data => {
        setUsuario(data.results[0]); // Guardamos el usuario en el estado
      })
      .catch(error => console.error("Error al obtener usuario:", error)); // Manejamos errores
  }

  // Llamamos a la función cuando el componente se monta
  useEffect(() => {
    obtenerUsuario();
  }, []);

  return (
    <div>
      <h2>Usuario Aleatorio</h2>
      {usuario ? (
        <>
          <img src={usuario.picture.large} alt="Foto del usuario" />
          <p>Nombre: {usuario.name.first} {usuario.name.last}</p>
          <p>Email: {usuario.email}</p>
        </>
      ) : (
        <p>Cargando usuario...</p>
      )}
      <button onClick={obtenerUsuario}>Obtener Nuevo Usuario</button>
    </div>
  );
}
