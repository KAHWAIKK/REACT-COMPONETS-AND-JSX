import React from 'react'

const Content = () => {
    const handleNameChange = () =>{
        const names = ["Bob","Kevin","Dave","Kahwai"];
        const interger = Math.floor(Math.random()*3 + 1);
        return names[interger];
      }
      /* React can respond to various click events */
      const handleClick = () =>{
        console.log("I have been clicked")/* console returns I have been clicked */
      }
      /* Passing in a parameter to a function */
      const handleClick2 = (name) =>{
        console.log(`${name} has been clicked`)/* console returns KEVIN has been clicked */
      }
      /* Accessing the event Object using click event function */
      const handleClick3 = (e) =>{
        console.log(e)/* console returns the event object with its properties */
        /* we can now access the properties of the event using */
        console.log(e.target)//console returns <button>Click me</button>
        console.log(e.target.textContent)//console returns Click me
      }
      /* React can also listen to other events as well, one of those events is a double click event */
      const handleClick4 = () =>{
        console.log("I have been double clicked")/* console returns I have been clicked */
      }
  return (
    <main>
        <p 
        onDoubleClick={handleClick4}>
        Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=>{
            handleClick2('KEVIN')}
        }>Click me</button>
        <button onClick={(event)=>{
            handleClick3(event)}
        }>Click me</button>
    </main>
    
  )
}

export default Content