
// import React from "react";
import logo from './loginLogo.jpg';
import Header from "./headerComponent";
import './styles.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import RadioButtonGroup from "./testRadio";





function LoginPage() {
 const navigate = useNavigate();
 // const history = useHistory();
 const [formData, setFormData] = useState({
  email: '',
  password: '',
 });

 const [selectedOption, setSelectedOption] = useState('Guest');

 const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
 };

 const handleChange = (e) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if(formData.email==='ashok@test.com') {
   // sessionStorage.setItem("useradmin",true)
   navigate('/admin');
  }
  // Perform form submission and API call
  axios.post('http://localhost:1992/login', formData)
      .then(response => {
       // Handle successful login

       console.log(response.data);
       if(response.data=='Login Successfully') {
          // history.push('/dashboard');
        // if(formData.email=='ashok@test.com') {
        //  // sessionStorage.setItem("useradmin",true)
        //  navigate('/admin');
        // } else {
         navigate('/dashboard');
        }



      })
      .catch(error => {
       // Handle login error
       console.error(error.response.data);

      });
 };


return(
    <div>
     <Header />
     <div className="login-background" style={{height:'90vh'}}>

      <div className="container">



        <form onSubmit={handleSubmit} >

         <h2> <img src={logo} alt ="Logo" style={{ marginBottom: 'auto'}} className="logo" /></h2>
         <Form>
          <Form.Check
              inline
              label="Admin/User"
              name="group1"
              value="Admin/User"
              type= "radio"
              checked={selectedOption === 'Admin/User'}
              onChange={handleOptionChange}
              // id={`inline-${type}-1`}
          />
          <Form.Check
              inline
              label="Guest"
              name="group1"
              value="Guest"
              type="radio"
              defaultChecked={true}
              Checked={selectedOption === 'Guest'}

              onChange={handleOptionChange}
              // id={`inline-${type}-2`}
          />

         </Form>


         {/* <div class="form-group">*/}

         {/* <label for="username">UserName</label>*/}

         {/* <input type="text" value={formData.email} onChange={handleChange} name="email" required />*/}

         {/* </div>*/}

         {/* <div class="form-group">*/}

         {/*<label for="username">Password</label>*/}

         {/* <input type="text" value={formData.password} onChange={handleChange} name="password" required />*/}

         {/* </div>*/}


         {selectedOption === 'Admin/User' && (
             // Render the content to be shown when 'option1' is selected
             <div>
              {/* Place your hidden page behavior components here */}
              <div className="form-group">

               <label htmlFor="username">UserName</label>

               <input type="text"  name="email" required/>

              </div>

             </div>
         )}

         {selectedOption === 'Guest' && (
             // Render the content to be shown when 'option2' is selected
             <div>
              {/* Place your hidden page behavior components here */}
              <div className="form-group">

               <label htmlFor="username">UserName</label>

               <input type="text" value={formData.email} onChange={handleChange} name="email" required/>

              </div>

              <div className="form-group">

               <label htmlFor="username">Password</label>

               <input type="password" value={formData.password} onChange={handleChange} name="password" required/>

              </div>

             </div>
         )}



         <div>

          <button type="submit" className="btn btn-success">Login</button>

         </div>




        </form>



      </div>
     </div>
    </div>




)


}

export default LoginPage;