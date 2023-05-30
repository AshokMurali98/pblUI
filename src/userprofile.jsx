import React from 'react';
import './styles.css'
import Navbar from "react-bootstrap/Navbar";
import imgLogo from "./logoImage.png";
import logo from "./loginLogo.jpg";
import LeftMenu from "./leftMenu";
import PostProject from "./postProject";


const UserProfile = () => {
    return (


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
                </div>
                <div>
                    <div className="user-profile">

                        <div className="profile-header">
                            <img
                                className="profile-picture"
                                src={logo}
                                alt="Profile"
                            />
                            <div className="profile-info">
                                <h2 className="profile-name">John Doe</h2>
                                <p className="profile-email">john.doe@example.com</p>
                            </div>
                        </div>
                        <div className="profile-details">
                            <h3>About Me</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
                                dolor quis dolor commodo venenatis et mi. Nullam varius bibendum metus
                                eget placerat. Morbi vulputate mauris et orci rutrum, sit amet
                                malesuada nunc cursus.
                            </p>
                        </div>
                        <div className="profile-posts">
                            <h3>Projects Posted</h3>
                            <ul>
                                <li>Post 1</li>
                                <li>Post 2</li>
                                <li>Post 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>

            </div>





//         <div>
//         <nav className="navbar navbar-expand-md navbar-light bg-light">
//             <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
//
//                 <Navbar bg="light" expand="lg">
//                     <Navbar.Brand href="#home">
//                         <img
//                             src={imgLogo}
//                             width="250"
//                             height="60"
//                             className="d-inline-block align-top"
//                             alt="Logo"
//                         />
//
//                     </Navbar.Brand>
//                 </Navbar>
//
//             </div>
//         </nav>
//            <div>
// <LeftMenu />
//         <div className="user-profile">
//
//             <div className="profile-header">
//                 <img
//                     className="profile-picture"
//                     src={logo}
//                     alt="Profile"
//                 />
//                 <div className="profile-info">
//                     <h2 className="profile-name">John Doe</h2>
//                     <p className="profile-email">john.doe@example.com</p>
//                 </div>
//             </div>
//             <div className="profile-details">
//                 <h3>About Me</h3>
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
//                     dolor quis dolor commodo venenatis et mi. Nullam varius bibendum metus
//                     eget placerat. Morbi vulputate mauris et orci rutrum, sit amet
//                     malesuada nunc cursus.
//                 </p>
//             </div>
//             <div className="profile-posts">
//                 <h3>Projects Posted</h3>
//                 <ul>
//                     <li>Post 1</li>
//                     <li>Post 2</li>
//                     <li>Post 3</li>
//                 </ul>
//             </div>
//         </div>
//            </div>
//         </div>
    );
};

export default UserProfile;

