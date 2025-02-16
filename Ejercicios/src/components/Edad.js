import React, { useState } from "react";

export default function Edad() {
  const [edad, setEdad] = useState("");

  return (
    <div>
      <h2>Verificación de Edad</h2>
      <input 
        type="number" 
        placeholder="Ingresa tu edad" 
        value={edad} 
        onChange={(e) => setEdad(e.target.value)}
      />

      {edad > 17 && <p>Es mayor de edad</p>}
    
      <p>{edad ? (edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad") : "Ingresa tu edad"}</p>
    
    
      
    </div>
  );
}
