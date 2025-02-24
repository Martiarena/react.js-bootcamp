import React from "react";
import withAuth from "./withAuth";

const Profile = () => {
    return <h1>Bienvenido a tu perfil</h1>;
};

export default withAuth(Profile);