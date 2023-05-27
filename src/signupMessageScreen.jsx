
import React from "react";
import Nav from "react-bootstrap/Nav";

const MessageScreen=()=> {
    return(
        <div align={'center'}>
        <p>Registration successfully done, Please redirect to the login screen use this link
            <a href="login" style={{color:'#024930',fontWeight:'bold'}}> Login</a>
        </p>
        </div>
    )
}

export default MessageScreen;