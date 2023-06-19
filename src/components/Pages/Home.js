import React from "react";
import Navbar from "../Layouts/Header/NavBar"
import CarouselComponent from "../Layouts/Main/Carousel"
import ServiceArea from "../Layouts/Main/ServiceArea"
import Footer from "../Layouts/Footer/Footer"


function Home() {
    return(
        <div>
            <div className="homePage">
                <Navbar/>
                <CarouselComponent/>
            </div>
            <div className="homeMain">
                    <ServiceArea/>
                </div>                
                <div className="footerHome">
                    <Footer/>
                </div>
        </div>
    )
}

export default Home;