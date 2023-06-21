import React from "react";
import Gyms from "../../Layouts/Gyms/Gyms";
import Footer from '../../Layouts/Footer/Footer'
import styles from "./styles.module.scss"
import Navbar from "../../Layouts/Header/NavBarUser";

const Gyms_stock = () => {
    return(
        <div className={styles.gymPage}>
            <Navbar/>
            <div className={styles.marketplace}>
                <Gyms/>
            </div>
            <Footer/>
        </div>
    )
}

export default Gyms_stock;