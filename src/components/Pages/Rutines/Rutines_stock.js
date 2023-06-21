import React from 'react'
import Rutines from "../../Layouts/Rutines/Rutines"
import Navbar from '../../Layouts/Header/NavBarUser'
import styles from '../../Layouts/Rutines/styles.module.scss'
import Footer from '../../Layouts/Footer/Footer'

const Rutines_stock = () => {
    return(
        <div className={styles.rotinesPage}>
            <Navbar/>
            <Rutines/>
            <Footer/>
        </div>
    )
}
export default Rutines_stock;