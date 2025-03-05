import React, { useState } from 'react'

export default function HookCounter() {
    
    const [count, setCount] = useState(0)
    // Rules of Hooks
    // Don't Call Hooks inside loops, conditions, or nested functions
    // Only Call Hooks from React Funtions not in javascript funtions

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Hook Count {count}</button>
        </div>
    )
}
