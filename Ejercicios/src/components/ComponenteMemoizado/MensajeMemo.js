import React from "react";

const MensajeMemo = React.memo(({ texto }) => {
  console.log("🟢 Renderizando Mensaje...");
  return <p>{texto}</p>;
});

export default MensajeMemo;