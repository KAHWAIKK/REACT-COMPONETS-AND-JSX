/* import logo from './logo.svg'; */
/* import './App.css'; */
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
 /*  const handleNameChange = () =>{
    const names = ["Bob","Kevin","Dave","Kahwai"];
    const interger = Math.floor(Math.random()*3 + 1);
    return names[interger];
  } */
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
      localStorage.setItem('shoppingList',JSON.stringify(listItems));
      /* you will not see a change in the app immediately */

      /* However you will notice that after deleting all the items in the list, we have a blank web page,we need to have a message for the user,this can be done through adding an expression in our JSX template from line 54-ifCondition and ending at line 82*/

      }
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/*   <img src={logo} className="App-logo" alt="logo" /> */}
        
       {/*  <p>Lets create a template html</p>
        <p>Hello {handleNameChange()}!</p> */}

        {/*   <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <p>{/* JSX accepts javascript expressions placed inside curly brackets as shown below, a string-{'kevin'}-,a number-{1}-,an array-{[1,2,3]}-.Even if you remove the curly braces JSX will render the data as text -[1,2,3]-.We cannot however display an object as shown or a boolean.Note if you want to comment something out then you have to do that inside of curly brackets */}</p>
        <p>{/* {nameA} */}</p>
        <p>{/* commenting done inside curly brackets */} {/* {nameA} */}</p>
     {/*  </header> */}
      <Header title = 'Grocery List' ></Header>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
