import React, { forwardRef } from "react";

const ComponenteHijo3 = forwardRef((props, ref) => {
  return (
    <div>
      <h3>Componente Hijo</h3>
      {/* 👉 Este input debe recibir el foco cuando se haga clic en el botón del padre */}
      <input type="text" ref={ref} placeholder="Escribe aquí..." />
    </div>
  );
});

export default ComponenteHijo3;
