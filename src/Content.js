import React from 'react'

const Content = () => {
    const handleNameChange = () =>{
        const names = ["Bob","Kevin","Dave","Kahwai"];
        const interger = Math.floor(Math.random()*3 + 1);
        return names[interger];
      }
  return (
    <main>
         <p>Hello {handleNameChange()}!</p>
    </main>
  )
}

export default Content