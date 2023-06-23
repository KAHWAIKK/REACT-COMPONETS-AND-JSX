import React from 'react';
/* import { FaTrashAlt } from 'react-icons/fa'; */

/* To use useState hook in react _which reacts to changes in component state- we will have to import it from  react */
import ItemList  from './ItemList';
/* import { useState } from 'react'; */
/* Now we can use the useState hook inside of our component */
/* the useState hook provides us with a way to make a value reactive and update the new value in the template */
const Content = ({items,handleCheck,handleDelete}) => {
    

    /* creating a function which listens to the onChange event and applies the checkmark */

    /* Now that we have finshed makimng changes to the footer,we can now declutter our code here through abstraction - we can create other reusable contents, we can take the ul and make another functional component*/
    return (
      <main>
          {items.length ? (
            <ItemList
              items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            ></ItemList>
          ) : (
            <p style={{ marginTop :'2rem'}}>Your List is Empty</p>
          )}
      </main>
      )
  }

export default Content