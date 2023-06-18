import React from "react";
import Cart from "../../Layouts/Cart/Cart"
import Products from "../../Layouts/Products/Products";
import Navbar from "../../Layouts/Header/NavBarUser";
import styles from "./styles.module.scss"

const Marketplace = () => {
    return(
    <div className={styles.marketplace}>
      <Navbar/>
      <Cart />
      <Products />
    </div>
    )
}
export default Marketplace;