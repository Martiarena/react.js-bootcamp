// HeroWrapper.js
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Algo salió mal.</h2>
      <p>Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Reintentar</button>
    </div>
  );
}

export default function HeroWrapper({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
