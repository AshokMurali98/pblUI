
import React from 'react';
import imgLogo from './logoImage.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './styles.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Header = () => {


    // return (
    //     <Navbar bg="light" expand="lg">
    //       <Navbar.Brand href="#home">
    //         <img
    //           src={imgLogo}
    //           width="300"
    //           height="75"
    //           className="d-inline-block align-top"
    //           alt="Logo"
    //         />
         
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className='ml-aut0' style={{justifyContent: 'right'}} >
                
    //           <Nav.Link href="#home">Home</Nav.Link>
    //           <Nav.Link href="#about">Login</Nav.Link>
    //           <Nav.Link href="#services">Signup</Nav.Link>
    //           <Nav.Link href="#contact">Contact</Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Navbar>
    // )

    // return(
    //     <header>
    //                <Navbar bg="light" expand="lg" variant="light">
    //   <Navbar.Toggle aria-controls="header-nav" />
    //   <Navbar.Collapse id="header-nav">
    //     <Nav className="ml-auto">
    //       <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#about">About</Nav.Link>
    //       <Nav.Link href="#services">Services</Nav.Link>
    //       <Nav.Link href="#contact">Contact</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    //         <img src={imgLogo} alt ="Logo" style={{ width: '300px', height: 'auto' }} />
     
    //         <hr></hr>
    //     </header>
    // )

    return(
        <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    
    <Navbar bg="light" expand="lg">
           <Navbar.Brand href="#home">
            <img
              src={imgLogo}
              width="250"
              height="60"
              className="d-inline-block align-top"
              alt="Logo"
         />
         
          </Navbar.Brand>
        </Navbar>

    </div>
    
    <div class="navbar-collapse collapse w-80 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">

        <li class="nav-item">
        <Nav.Link href="/" style={{color:'#024930',fontWeight:'bold'}}>Home</Nav.Link>
            </li>
            <li class="nav-item">
            <Nav.Link href="login" style={{color:'#024930',fontWeight:'bold'}}>Login</Nav.Link>
            
            
            </li>
            <li class="nav-item">
            <Nav.Link href="signUp" style={{color:'#024930',fontWeight:'bold'}}>Signup</Nav.Link>
            </li>
        </ul>
    </div>
</nav>
    )
    

}

export default Header;