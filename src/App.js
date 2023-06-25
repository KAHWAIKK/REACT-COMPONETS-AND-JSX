/* import logo from './logo.svg'; */
/* import './App.css'; */
import Header from './Header';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';


/* Lets say footer needs acces to the listItems,but they are allmested in the content component and this are sibling component we therefore cant reach to the content component and get the data that we need, so we will take the data from the content component move it up to the app content then drill it down to both content and footer, we cut the array(data) from the content component and put it here in the app.js file*/
/* We will then pass the items and setItems to content */


function App() {
 /* const handleNameChange = () =>{
    const names = ["Bob","Kevin","Dave","Kahwai"];
    const interger = Math.floor(Math.random()*3 + 1);
    return names[interger];
  } */

/*   const [items, setItems] = useState([
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
   */
  /* In the case we do not want to use useState but instead useState from local storage, we could use the following code, we have adjusted a few things
   */
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

  const [search,setSearch] = useState("")

/* to make the additem a controlled inpiut we need to tie it to state */
  const [newItem,setNewItem] = useState("")

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    /* Saving state to local storage */
    localStorage.setItem('shoppingList',JSON.stringify(newItems));
  }

  const addItem = (item) =>{
    const id = items.length ? items[items.length -1].id + 1: 1;
    const myNewItem = {id, checked : false, item};
    const listItems = [...items,myNewItem]
    setAndSaveItems(listItems)
  }

  
  const handleCheck = (id) =>{
    //console.log(`key :${id}`);
    /* adjusting our function to prevenr the default from being rendered. */
    const listItems = items.map((item) =>
      item.id === id ?{ ...item, checked: !item.checked
      } : item );
     setAndSaveItems(listItems)/* you will not see a change in the app immediately */
    }
      /* Adding the Delete function */
    const handleDelete = (id) =>{
      console.log(id);//this will just log the id of the item which has its delete icon clicked
      /* Now lets put the details of handleDelete to execute the delete functionality */
      const listItems = items.filter((item) => item.id !== id);
     setAndSaveItems(listItems)
      /* you will not see a change in the app immediately */

      /* However you will notice that after deleting all the items in the list, we have a blank web page,we need to have a message for the user,this can be done through adding an expression in our JSX template from line 54-ifCondition and ending at line 82*/
      }
      /* Adding the handleSubmit that will now submit  */
      const handleSubmit = (e)=>{
        e.preventDefault();/* this function prevents the default nature of a page to reload upon submitting */
        /* Because we used the required attribute in the form,we should not get a blank submission,we can check fotr that by the below code */
        if(!newItem) return;/* we are saying thart if the value of new item is undefined ,then exit this function*/
        console.log(newItem);
       addItem(newItem);
        setNewItem('');
       // console.log('submitted')
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
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      ></AddItem>
      <SearchItem
        search={search}
        setSearch={setSearch}
      ></SearchItem>
      <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></Content>
      <Footer
      length={items.length}
      ></Footer>
    </div>
  );
}

export default App;

/* You will notice that even after we delete items we could refresh the page and our default list we be displayed,,this is because we are using useState functionality even if we save to localStorage ,using useState gives usnthe opportunity to add items which local storage cant perform, we will do that with a new component called AddItem inside of the AddFile js file*/

/* A recap of what we have done today with our two controlled components,

AddItem has has a value equals to the state while onChange has a value equal to the setState

*/
