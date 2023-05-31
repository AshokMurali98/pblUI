import './styles.css';
import LeftMenu from "./leftMenu";
import Navbar from "react-bootstrap/Navbar";
import imgLogo from "./logoImage.png";
import React from "react";


function Myprojects() {
    return(
        <div>
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
            <div style={{display:"flex"}}>
                <div className="dashboard" style={{width:"20%"}}>
                    <LeftMenu />

                </div >
                <h4 >This page is under Maintenance</h4>
            </div>
        </div>
    )
}

export default Myprojects