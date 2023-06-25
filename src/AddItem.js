import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';/* Learn more about  this but in this project I will use it to change the hover effect of the submit button and shift focus back to textarea*/

const AddItem = ({ newItem, setNewItem , handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input type="text" 
                autoFocus
                ref={inputRef}
                id='addItem'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
        >
        <FaPlus/>
        </button>
    </form>
  )
}

export default AddItem

/* Add Item component is added in the parent component and displayed, this will now need styling */