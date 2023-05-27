
// import React from "react";
import Header from "./headerComponent";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

    <div>
        <Header />

    <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', margin:'50px' }}  className="login-background">

    <div>

        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Signup</h2>

        <form onSubmit={handleSubmit} style={{ width:'350px', opacity:'0.9',height:'320px', padding: '20px' }}>
            <div>
                {/* <label>FirstName </label> */}
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} class="form-control" placeholder="FirstName" margin="10px"/>
            </div>
            <div>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} class="form-control" placeholder="LastName" margin="10px"/>
            </div>
            <div>
            <input type="text" name="email" value={formData.email} onChange={handleChange} class="form-control" placeholder="Email" />
            </div>
            <div>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} class="form-control" placeholder="Contact" />
            </div>

            <div>
            <input type="text" name="password" value={formData.password} onChange={handleChange} class="form-control" placeholder="password" />
            </div>

            <button type="submit" class="btn btn-success">Register</button>


        </form>
    </div>
    </div>
   </div>
);

}

export default SignupPage;