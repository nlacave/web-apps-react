import React, {useState} from 'react'

const Item = ({tarea, realizada}) => {
    return (
        <li>{tarea} {realizada ? "✅" : "❌"}</li>
      );
}

export default Item;

export const ListadoArray = () => {
    let listadoItems = [
        {tarea: "Trabajar", realizada: true},
        {tarea: "Estudiar programación", realizada: true},
        {tarea: "Estudiar inglés", realizada: false},
        {tarea: "Editar video", realizada: false},
    ]

    const [listado, setListado] = useState(listadoItems)
  return (
    <>
        <ol>
            {listado.map(item => <Item key={item.tarea} tarea={item.tarea} realizada={item.realizada}></Item>)}
        </ol>
    </>
  )
}
