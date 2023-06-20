import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
/* To use useState hook in react _which reacts to changes in component state- we will have to import it from  react */

import { useState } from 'react';/* Now we can use the useState hook inside of our component */
/* the useState hook provides us with a way to make a value reactive and update the new value in the template */
const Content = () => {
    const [items, setItems] = useState([
      {
        id:1,
        checked:false,//turning this boolean to a value of true will show us a checkmark when we click on the boxes
        item: 'One half pound bag of cocoa covered'
      },
      {
        id:2,
        checked:true,
        item: 'Item 2'
      },
      {
        id:3,
        checked:false,
        item: 'Item 3'
      }
    ]);

    /* creating a function which listens to the onChange event and applies the checkmark */

    const handleCheck = (id) =>{
      //console.log(`key :${id}`);
      /* adjusting our function to prevenr the default from being rendered. */
      const listItems = items.map((item) =>
        item.id === id ?{ ...item, checked: !item.checked
        } : item );
        setItems(listItems);
        /* Saving state to local storage */
        localStorage.setItem('shoppingList',JSON.stringify(listItems));/* you will not see a change in the app immediately */
      }
        /* Adding the Delete function */
        const handleDelete = (id) =>{
          console.log(id);//this will just log the id of the item which has its delete icon clicked
          /* Now lets put the details of handleDelete to execute the delete functionality */
          const listItems = items.filter((item) => item.id !== id);
          setItems(listItems);
          /* Saving state to local storage */
          localStorage.setItem('shoppingList',JSON.stringify(listItems));/* you will not see a change in the app immediately */

        }
    
    return (
      <main>
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
      </main>
      )
  }

export default Content