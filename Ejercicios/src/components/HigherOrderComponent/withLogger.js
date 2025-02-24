import React, { useEffect, useRef } from "react";

const withLogger = (WrappedComponent, eventType = "click") => {
    return (props) => {
        const componentRef = useRef(null);

        useEffect(() => {
            const element = componentRef.current;
            if (!element) return;

            const handleEvent = (event) => {
                console.log(`Evento registrado: ${event.type} en ${WrappedComponent.name} a las ${new Date().toLocaleTimeString()}`);
                if (event.target && event.target.focus) {
                    event.target.focus();
                }
            };

            const handleDoubleClick = (event) => {
                console.log(`Doble click registrado en ${WrappedComponent.name} a las ${new Date().toLocaleTimeString()}`);
            };

            element.addEventListener(eventType, handleEvent);
            if (eventType === "click") {
                element.addEventListener("dblclick", handleDoubleClick);
            }

            return () => {
                element.removeEventListener(eventType, handleEvent);
                if (eventType === "click") {
                    element.removeEventListener("dblclick", handleDoubleClick);
                }
            };
        }, [eventType]);

        return (
            <div ref={componentRef}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withLogger;
