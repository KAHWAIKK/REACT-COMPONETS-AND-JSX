/* import logo from './logo.svg'; */
/* import './App.css'; */
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
 /*  const handleNameChange = () =>{
    const names = ["Bob","Kevin","Dave","Kahwai"];
    const interger = Math.floor(Math.random()*3 + 1);
    return names[interger];
  } */
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
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
