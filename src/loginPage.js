
// import React from "react";
import logo from './loginLogo.jpg';
import Header from "./headerComponent";
import './styles.css';
import axios from 'axios';
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Dashboard from "./dashboardComponent";
import Form from "react-bootstrap/Form";


function LoginPage() {
 const navigate = useNavigate();
 // const history = useHistory();
 const [formData, setFormData] = useState({
  email: '',
  password: '',
 });

 const handleChange = (e) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if(formData.email=='ashok@test.com') {
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
    
    // return(

    //     <div>
    //         <Header />
        
    //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }} className="login-background" >
               
    //     <div className="logo-container">
    //         {/* <div className="login-page"> */}
           
            
    //         {/* <img src={logo} alt ="Logo" style={{ marginBottom: 'auto'}} className="logo" /> */}

            
         
    //         <form style={{ width: '250px',  padding: '20px' }}>
    //          {/* <div className="logo-container">  */}
            
    
    //         {/* </div> */}
    //             <div>

    //             <input type="text"  class="form-control" placeholder="Email" />
    //         <br></br>
                            
    //                         <input type="text"  class="form-control" placeholder="Password"></input>
    //                 {/* <label>Email: </label>
    //                 <input type ="email" style={{ width:'70%', marginBottom: '10px' }} />

    //                 <label>Password: </label>
    //                 <input type="password" style={{ width:'70%', marginBottom: '10px' }}  /> */}
    //             </div>

               
    //             <div>
    //                 <br></br>
    //             <input type="button" onclick="discount()" value="Login" class="btn btn-success" />
    //             </div>
    //         </form>
    //     </div>
    //     </div>
    //     </div>
    //     // </div>
    // );

return(
<div className="login-background">
<Header />
<div class="container">


 <form onSubmit={handleSubmit} >

 <h2> <img src={logo} alt ="Logo" style={{ marginBottom: 'auto'}} className="logo" /></h2>

 <div class="form-group">

 <label for="username">UserName</label>

 <input type="text" value={formData.email} onChange={handleChange} name="email" required />

 </div>

 <div class="form-group">

<label for="username">Password</label>

 <input type="text" value={formData.password} onChange={handleChange} name="password" required />

 </div>


  <Form>
  <Form.Check
      inline
      label="Admin/User"
      name="group1"
      type= "radio"
      // id={`inline-${type}-1`}
  />
  <Form.Check
      inline
      label="Guest"
      name="group1"
      type="radio"
      // id={`inline-${type}-2`}
  />

</Form>



 <div>

<button type="submit" class="btn btn-success"  >Login</button>

</div>



</form>

</div>
</div>

)


}

export default LoginPage;