import React, { useState } from 'react'

const withToggle = (WrappedComponent) => {
    return (props) => {
        const [isVisible, setIsVisible] = useState(true);
    
        const toggleVisibility = () => {
          setIsVisible(!isVisible);
        };

        return (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={toggleVisibility} style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>
                    {isVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
                </button>
                {isVisible && <div style={{ marginTop: '10px' }}><WrappedComponent {...props} /></div>}
            </div>
        );
    }
}

export default withToggle;
