
import React from "react";
import logo from './loginLogo.jpg';
import Header from "./headerComponent";
import './styles.css';


function LoginPage() {
    
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


 <form >

 <h2> <img src={logo} alt ="Logo" style={{ marginBottom: 'auto'}} className="logo" /></h2>

 <div class="form-group">

 <label for="username">UserName</label>

 <input type="text" id="username" name="username" required />

 </div>

 <div class="form-group">

<label for="username">Password</label>

 <input type="text" id="username" name="username" required />

 </div>


 <div>

<button type="submit" class="btn btn-success" >Login</button>

</div>



</form>

</div>
</div>

)


}

export default LoginPage;