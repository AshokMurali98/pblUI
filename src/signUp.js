
import React from "react";
import Header from "./headerComponent";




function SignupPage() {

return(
    
    <div>
        <Header />
    
    <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', margin:'50px' }}  className="login-background">
  
    <div>
        
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Signup</h2>
        
        <form style={{   padding: '20px' }}>
            <div>
                {/* <label>FirstName </label> */}
                <input type="text"  class="form-control" placeholder="FirstName" margin="10px"/>
            </div>
            <div>
            <input type="text"  class="form-control" placeholder="LastName" margin="10px"/>
            </div>
            <div>
            <input type="text"  class="form-control" placeholder="Email" />
            </div>
            <div>
            <input type="text"  class="form-control" placeholder="Contact" />
            </div>

            <div>
            <input type="text"  class="form-control" placeholder="" />
            </div>
            <button type="submit" style={{ width: '100%', background:'#024930',color:'white'  }}>Register</button>
        </form>
    </div>
    </div>
   </div>
);

}

export default SignupPage;