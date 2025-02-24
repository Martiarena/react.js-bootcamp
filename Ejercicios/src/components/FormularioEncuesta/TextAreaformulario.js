import React from 'react';

export default function TextAreaformulario({ LabelText, Name, Value, onChange }) {
    return (
        <>
            <label>{LabelText}:</label>
            <textarea name={Name} value={Value} onChange={onChange}></textarea>
        </>
    );
}