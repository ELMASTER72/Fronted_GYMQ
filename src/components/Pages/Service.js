import React from "react";
import Navbar from "../Layouts/Header/NavBar";
import PageServicesHeader from "../Layouts/Header/PageServicesHeader";
import ServiceDetails from "../Layouts/Main/ServiceDetails";
import Footer from "../Layouts/Footer/Footer";

function Service() {
    return (
        <div>
            <div className="servicePage">
                <Navbar/>
                <PageServicesHeader/>
                <ServiceDetails/>
                <Footer/>
            </div>
        </div>
    )
}

export default Service;