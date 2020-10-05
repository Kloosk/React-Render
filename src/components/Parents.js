import React, {useState} from 'react';
const Parents = ({children}) => {
    const [count,setCount] = useState(0);
    console.log("Render parents");
    return (
        <div>
            <button onClick={() => setCount(prev => prev +1)}>Count: {count}</button>
            {children}
        </div>
    );
};

export default Parents;