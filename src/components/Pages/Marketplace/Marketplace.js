import React from "react";
import Cart from "../../Layouts/Cart/Cart"
import Products from "../../Layouts/Products/Products";
import Navbar from "../../Layouts/Header/NavBarUser";
import styles from "./styles.module.scss"
import PageServicesHeader from "../../Layouts/Header/PageServicesHeader";
import Footer from '../../Layouts/Footer/Footer'

const Marketplace = () => {
    return(
    <div className={styles.marketplace}>
      <Navbar/>
      <div className={styles.marketPage}>
        <PageServicesHeader/>
      </div>
      <Cart />
      <div className={styles.products}>
        <Products />
      </div>
      <Footer />
    </div>
    )
}
export default Marketplace;