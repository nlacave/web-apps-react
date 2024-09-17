import React from 'react'

let contador = 0;

const handleClick = (value) => {
    value += 1;
    console.log(value)
}

export const ContadorApp = ({value}) => {
  return (
    <>
        <h1>Contador: {contador}</h1>
        <button onClick={handleClick(value)}>Sumar</button>
    </>    
  )
}
