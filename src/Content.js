import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
/* To use useState hook in react _which reacts to changes in component state- we will have to import it from  react */

/* import { useState } from 'react'; */
/* Now we can use the useState hook inside of our component */
/* the useState hook provides us with a way to make a value reactive and update the new value in the template */
const Content = ({items,handleCheck,handleDelete}) => {
    

    /* creating a function which listens to the onChange event and applies the checkmark */

    
    return (
      <main>
          {items.length ? (
            <ul>
             {items.map((item) =>(
                //each list requires a key attribute
                <li className='item' key ={item.id}>
                    <input
                     type="checkbox"
                     onChange={()=>{
                      handleCheck(item.id)
                     }}
                     checked ={item.checked}
                    />
                    <label
                      style={(item.checked) ? { textDecoration:'line-through'}: null}
                      onDoubleClick={()=>{
                      handleCheck(item.id)
                     }}
                    >{item.item}</label>
                    {/* <button>Delete</button> */}
                    <FaTrashAlt 
                      onClick={()=> handleDelete(item.id)}
                      role="button"
                      tabIndex = "0"
                    />
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ marginTop :'2rem'}}>Your List is Empty</p>
          )}
      </main>
      )
  }

export default Content