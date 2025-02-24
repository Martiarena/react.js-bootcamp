import React from 'react';

export default function Selectformulario({ LabelText, Name, Value, onChange }) {
    return (
        <>
            <label>{LabelText}</label>
            <div>
                <input type="radio" name={Name} value="Sí" checked={Value === "Sí"} onChange={onChange} /> Sí
                <input type="radio" name={Name} value="No" checked={Value === "No"} onChange={onChange} /> No
            </div>
        </>
    );
}