import React from "react";

function BotonIncrementar({ incrementar }) {

  console.log("🟢 Renderizando Botón...");
  
  return <button onClick={incrementar}>Incrementar</button>;
}

export default React.memo(BotonIncrementar);