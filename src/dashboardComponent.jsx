
import React from "react";
import logo from './loginLogo.jpg';
import Header from "./headerComponent";
import './styles.css';
import LeftMenu from "./leftMenu";
import Navbar from "react-bootstrap/Navbar";
import imgLogo from "./logoImage.png";
import Prompt from "./postProject";




function Dashboard() {

    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">

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

                </div>
            </nav>
            <div align={'right'}>
                {/*<button >Post your Project</button>*/}
                <Prompt />
            </div>
            <div className="dashboard">
                <LeftMenu />
            </div>
        </div>

    );
};

export default Dashboard;