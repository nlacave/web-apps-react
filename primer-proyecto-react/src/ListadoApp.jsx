import React from 'react'

const Items = ({tarea, realizada}) => {
    return (
        <li>{tarea} {realizada ? "✅" : "❌"}</li>
        /*<li>{tarea} {realizada && "💯"}</li>*/
    )
}

export const ListadoApp = () => {
  return (
    <>
        <ol>
        <Items tarea="Trabajar" realizada={true}></Items>
        <Items tarea="Estudiar programación" realizada={true}></Items>
        <Items tarea="Estudiar inglés" realizada={false}></Items>
        <Items tarea="Editar video" realizada={false}></Items>
        </ol>
    </>
    
  )
}