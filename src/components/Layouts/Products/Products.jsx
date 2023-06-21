import React, { useContext , useState} from "react";
import CartContext from "../../ui/Cart_store/Car_Store";
import styles from "./styles.module.scss"

const Products = () => {
    const { addItemToCart, products } = useContext(CartContext);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
      };
      const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSearchQuery('');
        setIsOpen(false);
      };

    const filterCard = products.filter((product) => {
      if(selectedCategory && product.category !== selectedCategory){
        return false
      }
      if(searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())){
        return false
      }
      return true;
    })
    
    return(
      <div className="searchProducts">
                <input
                    type="text"
                    className='input'
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Buscar..."
                />
    <button className={styles.categorys} style={{color: 'black', backgroundColor: '#FFF000', marginLeft: 2+'rem', padding: 1+'rem'}} onClick={toggleDropdown}>Categorías</button>
    {isOpen && (
        <ul className="categorys">
          <ul style={{marginTop: 1+'rem'}}>
          <li style={{color: '#FFF000', marginLeft: 4+'rem'}} onClick={() => window.location.reload()}>Todo</li>
          <li style={{color: '#FFF000', marginLeft: 4+'rem'}} onClick={() => handleCategorySelect('ropa')}>Ropa</li>
          <li style={{color: '#FFF000', marginLeft: 4+'rem'}} onClick={() => handleCategorySelect('accesorios')}>Accesorios</li>
          <li style={{color: '#FFF000', marginLeft: 4+'rem'}} onClick={() => handleCategorySelect('suplemento')}>suplementos</li>
        </ul> 
        </ul>
      )}  
        <div className={styles.productsContainer}>
      {products &&
        filterCard.map((product, i) => (
          <div key={i} className={styles.product}>
            <div>
              <img src={product.img} alt={product.name} />
              <div className={styles.container}>
                <p>
                  {product.name}
                </p>
                <p>
                  ${product.price}
                </p>
                {!product.inCart ? (
                  <button onClick={() => addItemToCart(product)}>
                    Añadir al Carrito
                  </button>
                ) : (
                  <button>En el carrito</button>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
    </div>
    )
}
export default Products;