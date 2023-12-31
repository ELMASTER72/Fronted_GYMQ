import React, { useContext } from "react";
import CartContext from "../../ui/Cart_store/Car_Store";
import styles from "./styles.module.scss"

export const ItemCart = ({item}) =>{
    const {editItemToCart} = useContext(CartContext);

    const {amount} = item;  

    return(
        <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => editItemToCart(item._id, "add", amount)}>
              AGREGAR
            </button>
            <button onClick={() => editItemToCart(item._id, "del", amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
    )
}