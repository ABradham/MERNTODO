// Document imports
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
 } from 'reactstrap';


 // Create an AppNavbar class
 class AppNavbar extends Component{
     // Create state / instance variables for tracking the state of this component
     state = {
         isOpen: false
     }

     // Define toggle function
     toggle = () => {
         // Set 'isOpen' state variable to opposite when toggle() is called
         this.setState({isOpen: !this.state.isOpen})
     }

     // Define `render` function to display jsx / html (can use react components as html tags)
     // Triggers this.toggle on click of the NavbarToggler (this results in a state change)
     render(){
         return(
        <div>
             <Navbar color="dark" dark expand="sm" className="mb-5">
                 <Container>
                     <NavbarBrand href="/">Todo List</NavbarBrand>
                     <NavbarToggler onClick={this.toggle}/>
                     <Collapse isOpen={this.state.isOpen} navbar>
                         <Nav className="ml-auto" navbar>
                             <NavItem>
                                 <NavLink href="https://github.com/ABradham" color="white">Github</NavLink>
                             </NavItem>
                         </Nav>
                     </Collapse>
                 </Container>
             </Navbar>
         </div>
         );
     }
 }

 // Make this class / file accessible to other classes / files
 export default AppNavbar;