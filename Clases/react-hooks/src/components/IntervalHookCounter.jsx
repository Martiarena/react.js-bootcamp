import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, []) // , [count] Mirará por cambios en un estado :D, no olvidar o usar prevCount => prevCount

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter


