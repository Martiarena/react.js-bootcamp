import React from 'react';

export default function Campoformulario({ LabelText, Name, Value, onChange }) {
    return (
        <>
            <label>{LabelText}</label>
            <input type="text" name={Name} value={Value} onChange={onChange} />
        </>
    );
}