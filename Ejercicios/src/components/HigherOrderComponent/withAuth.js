import React from "react";

const withAuth = (WrappedComponent) => {
    return (props) => {
        const { isAuthenticated } = props; // Simula la autenticación
        
        if (!isAuthenticated) {
            return <h2>Acceso denegado. Por favor, inicia sesión.</h2>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;