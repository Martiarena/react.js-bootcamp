import React, {useState} from 'react';

function Cajadetexto() {
    
    const Maximo = 10;
    const [input, setinput] = useState('');

    const countLetters = (event) => {
        setinput(event.target.value);
    };

    return (
        <div>
            <input type="text" value={input} onChange={countLetters} maxLength={Maximo} />
            <p>Tiene {input.length} / {Maximo}</p>
        </div>
    );
}

export default Cajadetexto;
