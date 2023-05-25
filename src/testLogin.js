
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from "./headerComponent";
import logo from './loginLogo.jpg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'




const LoginPageTest = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div><Header />
    
    <div className="login-background">
    <div className="login-page" >
        
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}  >
      <img src={logo} alt ="Logo" style={{ marginBottom: 'auto'}} className="logo" />

      <Form.Group controlId="formSearch">
          <Form.Control
            type="text"
            placeholder="Search"
          
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>

        <Form.Group controlId="formEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
    </div>
    </div>
  );
};

export default LoginPageTest;
