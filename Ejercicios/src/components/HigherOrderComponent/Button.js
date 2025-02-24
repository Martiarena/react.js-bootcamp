import React from "react";
import withLogger from "./withLogger";

const Button = ({ text }) => {
    return <button>{text}</button>;
};

export default withLogger(Button, "click");
