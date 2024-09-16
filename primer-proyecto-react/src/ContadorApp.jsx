import React from 'react'

let contador = 0;

const handleClick = () => {
    contador += 1;
    console.log(contador)
}

export const ContadorApp = () => {
  return (
    <>
        <h1>Contador: {contador}</h1>
        <button onClick={handleClick}>Sumar</button>
    </>    
  )
}
