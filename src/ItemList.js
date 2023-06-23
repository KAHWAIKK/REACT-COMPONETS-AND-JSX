import React from 'react'
import LineItem from './LineItem';
/* import { FaTrashAlt } from 'react-icons/fa'; */

const itemsList = ({items,handleCheck,handleDelete}) => {
  return (
        <ul>
        {items.map((item) =>(
            //each list requires a key attribute
            //note each child should have a unique key prop
            <LineItem
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            ></LineItem>
        ))}
        </ul>
  )
}

export default itemsList