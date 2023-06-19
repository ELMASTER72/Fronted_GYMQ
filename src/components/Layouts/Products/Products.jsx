import React, { useContext } from "react";
import CartContext from "../../ui/Cart_store/Car_Store";
import styles from "./styles.module.scss"
import '../../../index.css'

const Products = () => {
    const { addItemToCart, products } = useContext(CartContext);
    
    return(
        <div className={styles.productsContainer}>
      {products &&
        products.map((product, i) => (
          <div key={i} className={styles.product}>
            <div className="productsList">
              <img src={product.img} alt={product.name} />
              <div>
                <p>
                  {product.name}
                </p>
                <p>
                  ${product.price}
                </p>
              </div>
            </div>
            {!product.inCart ? (
              <button onClick={() => addItemToCart(product)}>
                Add to Cart
              </button>
            ) : (
              <button>En el carrito</button>
            )}
          </div>
        ))}
    </div>
    )
}
export default Products;