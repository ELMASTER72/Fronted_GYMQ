import React from "react";
import NavBar from "../Layouts/Header/NavBar";
import Slogan from "../Layouts/Main/Slogan";
import MissionVision from "../Layouts/Main/MissionVision";
import Footer from "../Layouts/Footer/Footer";

function Us() {
    return (
        <div>
            <div className="usPage">
                <NavBar/>
                <div><Slogan/></div>
                <div><MissionVision/></div>
                <div><Footer/></div>
            </div>
        </div>
    )
}

export default Us;