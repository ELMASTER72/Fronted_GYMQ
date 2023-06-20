import React from 'react'
import Rutines from "../../Layouts/Rutines/Rutines"
import Navbar from '../../Layouts/Header/NavBar'
import styles from '../../Layouts/Rutines/styles.module.scss'
import PageRutines from '../../Layouts/Header/PageRutines'
import Footer from '../../Layouts/Footer/Footer'

const Rutines_stock = () => {
    return(
        <div className={styles.rotinesPage}>
            <Navbar/>
            <PageRutines/>
            <Rutines/>
            <Footer/>
        </div>
    )
}
export default Rutines_stock;