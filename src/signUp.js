
// import React from "react";
import Header from "./headerComponent";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import logo from "./loginLogo.jpg";

    const  SignupPage = () => {
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            contact:''
        });

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            // Perform form submission and API call

            axios.post('http://localhost:1992/saveUser', formData)
                .then(response => {
                    // Handle successful signup
                    console.log(response.data);
                    if(response.data=='Success') {
                        // history.push('/dashboard');;
                        toast.success('Signup Success');
                        //navigate('/login');
                        navigate('/message')
                    }
                })
                .catch(error => {
                    // Handle signup error
                    console.error(error);
                });
        };


        return(
            <div className="login-background" >
                <Header />
                <div className="container">


                    <Form  onSubmit={handleSubmit}  >
                        <h3 align='center' color='#024930'>Create an Account</h3>
                      <hr/>

                        <Row className="mb-sm-1" style={{blockSize:'auto'}}>
                            <Form.Group as={Col}  >
                                <Form.Label >FirstName</Form.Label>
                                <Form.Control  className="mb-3" controlId="" type="text" placeholder=""
                                              name="firstName" value={formData.firstName} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>LastName</Form.Label>
                                <Form.Control type="text" placeholder=""
                                              name="lastName" value={formData.lastName} onChange={handleChange}/>
                            </Form.Group>
                        </Row>


                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder=""
                                          name="email" value={formData.email} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-2" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="" type="password"
                                          name="password" value={formData.password} onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="">
                                    <option>MO</option>
                                    <option>TX</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Terms & Conditions" />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Submit
                        </Button>

                    </Form>


                </div>
            </div>



        )




//     return(
//
//     <div>
//         <Header />
//
//     <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', margin:'50px' }}  className="login-background">
//
//     <div>
//
//         <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Signup</h2>
//
//         <form onSubmit={handleSubmit} style={{ width:'350px', opacity:'0.9',height:'320px', padding: '20px' }}>
//             <div>
//                 {/* <label>FirstName </label> */}
//                 <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} class="form-control" placeholder="FirstName" margin="10px"/>
//             </div>
//             <div>
//             <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} class="form-control" placeholder="LastName" margin="10px"/>
//             </div>
//             <div>
//             <input type="text" name="email" value={formData.email} onChange={handleChange} class="form-control" placeholder="Email" />
//             </div>
//             <div>
//             <input type="text" name="contact" value={formData.contact} onChange={handleChange} class="form-control" placeholder="Contact" />
//             </div>
//
//             <div>
//             <input type="text" name="password" value={formData.password} onChange={handleChange} class="form-control" placeholder="password" />
//             </div>
//
//             <button type="submit" class="btn btn-success">Register</button>
//
//
//         </form>
//     </div>
//     </div>
//    </div>
// );

}

export default SignupPage;