import React, { useRef, useEffect } from 'react'

export default function AutoFocusInput() {
    const inputRef = useRef(null);

    function FieldFocus() {
        inputRef.current.focus()
    }

    useEffect(() => {
        FieldFocus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={FieldFocus}>Escribir</button>
        </div>
    )
}
