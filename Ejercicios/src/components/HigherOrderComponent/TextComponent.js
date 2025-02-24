import React from 'react'
import withToggle from "./withToggle";

const TextComponent = ({ text }) => {
    return <h1>{text}</h1>;
};

export default withToggle(TextComponent);