
import React from "react";
import logo from './loginLogo.jpg';
import Header from "./headerComponent";
import './styles.css';
import LeftMenu from "./leftMenu";

function Dashboard() {

    return(
        <div>
            <Header />

            <div className="dashboard">
                <LeftMenu />
            </div>
        </div>

    );
};

export default Dashboard;