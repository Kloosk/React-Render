import React, {useState, useMemo, useCallback} from 'react';
import {MemoryChildTwo} from './ChildTwo'
const ParentTwo = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('Lukas');
    console.log("Render parents");

    const person = {
      name: 'Madzia',
      age: 69
    };
    const memoPerson = useMemo(() => person, []);

    const handleClick = () => {};
    const memoClick = useCallback(() => handleClick,[]);

    return (
        <div>
            <button onClick={() => setCount(prev => prev +1)}>Count: {count}</button>
            <button onClick={() => setName('Madzik')}>Name</button>
            <MemoryChildTwo name={name} person={memoPerson} handleClick={memoClick}/>
        </div>
    );
};

export default ParentTwo;