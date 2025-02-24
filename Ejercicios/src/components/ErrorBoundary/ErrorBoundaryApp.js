import React from 'react'
import HeroList from './HeroList.js';
import HeroWrapper from "./HeroWrapper";

export default function ErrorBoundaryApp() {
    // Error Boundary
    const heroes = ["Batman", "Superman", "Joker", "Flash"];
    return (
        <div>
            {heroes.map((hero, index) => (
            <HeroWrapper key={index}>
                <HeroList heroes={hero} />
            </HeroWrapper>
        ))}
        </div>
    )
}
