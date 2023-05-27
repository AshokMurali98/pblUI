
import React from "react";
import './styles.css';
import imgLogo from './logoImage.png';
import Button from 'react-bootstrap/Button';
import Header from "./headerComponent";
import { Link } from 'react-router-dom';




const LandingPage = () => {
  return (
    
    <div><Header />
    <div className="landing-page">
        
      {/* <header >
      <img src={imgLogo} alt ="Logo" style={{ width: '250px', height: 'auto' }} />
       
      <div className="buttons">
      <button type="submit" style={{marginRight:"20px"}} >Login</button>
      </div>      
       
        <hr></hr>
      </header> */}
      <main className="login-background">
        <section id="hero">
          <h1>Welcome to Professional Based Learning</h1>
          <p>Explore your innovative ideas!</p>
      <input type="text" name="search" placeholder="Project search" style={{width:'300px'}} />
      <button type="submit">Search</button>
      {/* <Button variant="success">Search</Button> */}
        </section>
        
      </main>
      <footer>
        {/* Include footer content */}
      </footer>
    </div>
    </div>
  );
};

export default LandingPage;
