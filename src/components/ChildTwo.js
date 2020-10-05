import React from 'react';

const ChildTwo = ({name,person}) => {
    console.log("Render childTwo");
    return (
        <div>
            <p>ChildTwo components {name}</p>
            <p>ChildTwo components {person.name}</p>
            <p>ChildTwo components {person.age}</p>
        </div>
    );
};

export const MemoryChildTwo = React.memo(ChildTwo);
