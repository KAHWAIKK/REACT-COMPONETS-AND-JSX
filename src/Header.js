import React from 'react'
/* Differnt methods if css styling in React JS: inline or assigning it to a variable */

/* const Header = () => {
    const headerStyle = {
        backgroundColor:'royalblue',
        color:'#fff'
    }
  return (
    <header style ={headerStyle}>
        <h1>Groceries List</h1>
    </header>
  )
} */

const Header = (props) => {
  /* This parameter of props holds all the different properties from parent component that have now been passed to child components  */
    return (
    <header >
        <h1>{props.title}</h1>
    </header>
  )
}
/* Formulating default props- default props allow us to set values for props expected in the component and if they arent provided the the default values takeover,eg if there is a delay in displaying expected data */

Header.defaultProps ={
  title:"Default Title"/* The react DOM renders this "Default Title" on the title section*/
}
export default Header