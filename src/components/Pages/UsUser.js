import React from "react";
import Navbar from "../Layouts/Header/NavBarUser";
import PageHeader from "../Layouts/Header/PageHeader";
import Slogan from "../Layouts/Main/Slogan";
import MissionVision from "../Layouts/Main/MissionVision";
import Footer from "../Layouts/Footer/Footer";

function UsUser() {
    return (
        <div>
            <div className="usPage">
                <Navbar/>
                <PageHeader/>
                <div><Slogan/></div>
                <div><MissionVision/></div>
                <div><Footer/></div>
            </div>
        </div>
    )
}

export default UsUser;