import React, {useState} from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
    return (props) => {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
            setCount(prevCount => prevCount + incrementNumber);
        };

        return <WrappedComponent count={count} incrementCount={incrementCount} {...props} />;
    };
};

export default withCounter;
