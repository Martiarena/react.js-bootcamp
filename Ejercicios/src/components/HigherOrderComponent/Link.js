import React from "react";
import withLogger from "./withLogger";

const Link = ({ text }) => {
    return <a href="#">{text}</a>;
};

export default withLogger(Link, "mouseover");