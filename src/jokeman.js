import React, { useState, useEffect } from 'react';


export function Jokes () 
{
    function fetchData () {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
    }

    return (
        <div>
          <button onClick={fetchData}> Click me </button>
          <p>{response.value}</p>
        </div>
    );
}