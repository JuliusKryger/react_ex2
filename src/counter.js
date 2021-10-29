import React, { useState, useEffect } from 'react';

export function Counter(props)
{

    const [count, setCount] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("count");
        const initialValue = parseInt(saved);
        return initialValue;
      });

    useEffect(() => {    // Update the document title using the browser API  
        document.title = `You clicked ${count} times`; 
        localStorage.setItem("count", count); 
    },[count]);

    return (

        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + props.increment)}>
            add
          </button>
          <button onClick={() => setCount(count - props.increment)}>
            subtract
          </button>
        </div>

      );

}