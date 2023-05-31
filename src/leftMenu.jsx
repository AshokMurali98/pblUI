import React from 'react';

import Nav from "react-bootstrap/Nav";


const LeftMenu = () => {
    return (
        <div className="menu-container">
            <div className="menu">
                <ul>
                    <li><a href="dashboard">
                        <i className="fas fa-home"></i>Dashboard</a></li>
                    <li><a href="myprojects">MyProjects</a></li>
                    <li><Nav.Link href="profile" style={{color:'white',fontWeight:'bold'}}>Profile</Nav.Link></li>
                    <li><a href="#">Statistics</a></li>

                </ul>
            </div>

        </div>

    );
};

export default LeftMenu;
