import React from "react";

const Hello = () => {
/*    return (
        // Class es una palabra reservada en JSX, se usa className
        <div className='dummyClass'>
            <h1>Hello Crimsondeath</h1>
        </div>
    )*/

    // Componente sin JSX
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Crimsondeath')
    );
}

export default Hello