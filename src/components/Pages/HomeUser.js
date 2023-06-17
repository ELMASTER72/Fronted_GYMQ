import React from "react";
import Navbar from "../Layouts/Header/NavBarUser";
import CarouselComponent from "../Layouts/Main/Carousel"
import ServiceArea from "../Layouts/Main/ServiceArea"
import SugerettionArea from "../Layouts/Main/SugerettionArea"
import Footer from "../Layouts/Footer/Footer"


function HomeUser() {
    return(
        <div>
            <div className="homePage">
                <Navbar/>
                <CarouselComponent/>
            </div>
            <div className="homeMain">
                    <ServiceArea/>
                </div>
                <div className="sugerettionArea">
                    <SugerettionArea/>
                </div>
                <div className="footerHome">
                    <Footer/>
                </div>
        </div>
    )
}

export default HomeUser;