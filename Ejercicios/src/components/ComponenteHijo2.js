import React from 'react'

export default function ComponenteHijo2({Saludin, NombreChido, revelar}) {

    function handleRevelar(){
        revelar("Kazumi es CrimsonNeko93")
    }
    return (
        <div>
            <p>{Saludin} {NombreChido}</p>
            <button onClick={handleRevelar}>Revelar</button>
        </div>
    )
}
