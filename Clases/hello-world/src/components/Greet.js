import React from "react";

/*function Greet() {
    return <h1>Hola Raúl</h1>
}*/

// Se debe importar el componente con el nombre exacto y con "{ Greet }"
/* De-estructurar de "props" => "{name, heroName}":
const Greet = ({name, heroName}) => {*/
const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}

// Con "export default" Se puede variar el nombre
export default Greet;