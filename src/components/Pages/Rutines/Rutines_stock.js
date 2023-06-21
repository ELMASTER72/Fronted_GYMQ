import React from 'react'
import Rutines from "../../Layouts/Rutines/Rutines"
import Navbar from '../../Layouts/Header/NavBarUser'
import Footer from '../../Layouts/Footer/Footer'
import styles from "./styles.module.scss"
const Rutines_stock = () => {
    return(
        <div className={styles.rotinesPage}>
            <Navbar/>
            <div className={styles.rutines}>
            <Rutines/>
            </div>
            <Footer/>
        </div>
    )
}
export default Rutines_stock;