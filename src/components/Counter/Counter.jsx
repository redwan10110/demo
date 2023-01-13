import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    console.log(count);
    const handlePlus = () =>{
        setCount(count+1);
    }
    const handleMinus = () =>{
        setCount(count-1);
    }
  return (
    <div>
        <button onClick={handlePlus}>+</button>
        <span>{count}</span>
        <button onClick={handleMinus}>-</button>
    </div>
  )
}

export default Counter;