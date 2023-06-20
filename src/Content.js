import React from 'react';
/* To use useState hook in react _which reacts to changes in component state- we will have to import it from  react */

import { useState } from 'react';/* Now we can use the useState hook inside of our component */
/* the useState hook provides us with a way to make a value reactive and update the new value in the template */
const Content = () => {
    /* We will start out by defining what we will use for state */
    /* We will store the value that useState hook returns in a variable with 2 keywords,this is because the useState returns two values */

    /* The parameter that the useState takes could ba an array,object,boolean,number..it really doesnt matter the type of data */
    const [name, setName] = useState("Kahwai");
    /* One more example of useState */
    const [count,setCount] = useState(0);
    const [age,setAge] = useState(25);
    const handleNameChange = () =>{
        const names = ["Bob","Kevin","Dave","Kahwai"];
        const interger = Math.floor(Math.random()*3 + 1);
        setName (names[interger]);
        const ages = [4,45,36,89];
        const interger1 = Math.floor(Math.random()*3 + 1);
        setAge(ages[interger1]);
      }
      /* React can respond to various click events */
      const handleClick = () =>{
        setCount(count + 1);
        setCount(count + 1);
        console.log(count)/* console returns I have been clicked */
      }
      
      /* Passing in a parameter to a function */
      const handleClick2 = (name) =>{
        console.log(`${name} has been clicked `)/* console returns KEVIN has been clicked */
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

        /* It is important to note that when you need a reactive value or something that might change at some point we use the useState hook, we pass in an initial value as a parameter to that useState function which will be displayed in the template,and then call the setFunction that then updates that value by triggering a re-render*/
      }
  return (
    <main>
        <p 
        onDoubleClick={handleClick4}>
        Hello {name}! 
        </p>
        <p 
        onDoubleClick={handleNameChange}>
         I am {age} years old
        </p>
        <button onClick={handleNameChange}>Change name</button>{/* if (on click) event is triggerd by clicking this button handleNameChange fn is invoked that the fires the useState hook */}
        <button onClick={()=>{
            handleClick2('KEVIN')}
        }>Click me</button>
        <button onClick={(event)=>{
            handleClick3(event)}
        }>Click me</button>
        <button onClick={handleClick
        }>Click me</button>{/* on click the console returns the value of the current state(count) which is 0 */}
    </main>
    
  )
}

export default Content