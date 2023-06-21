import React from "react";
import Cart from "../../Layouts/Cart/Cart"
import Products from "../../Layouts/Products/Products";
import Navbar from "../../Layouts/Header/NavBarUser";
import styles from "./styles.module.scss"
import Footer from '../../Layouts/Footer/Footer'

const Marketplace = () => {
    return(
    <div className={styles.marketplace}>
      <Navbar/>
      <Cart />
      <div className={styles.products}>
        <Products />
      </div>
      <Footer />
    </div>
    )
}
export default Marketplace;