import React from 'react'

export default function HeroList({heroes}) {
    if (heroes === "Joker") {
        throw new Error("No es un héroe!");
    }
    return <h4>{heroes}</h4>;
}
