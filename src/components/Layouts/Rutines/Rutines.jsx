import React, { useContext, useState } from "react";
import CardRutineContext from "../../ui/CardRutine/Card_Rutine";
import styles from './styles.module.scss'
import { Link } from "react-router-dom";
 
const Rutines = () => {
    const {rutine} = useContext(CardRutineContext)
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        };
    const filterCard = rutine.filter((rutines) => {
        if(searchQuery && !rutines.name.toLowerCase().includes(searchQuery.toLowerCase())){
            return false
        }
        return true
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
        <div className={styles.productsContainer}>
            {rutine &&
            filterCard.map((rutines,i) => (
                <div key={i} className={styles.product} >
                <img src={rutines.img} alt={rutines.name}/>
                <div className={styles.information}>
                    <p>
                        {rutines.name}
                    </p>
                    <p>
                        {rutines.channel}
                    </p>
                    <Link className={styles.btn} to={`/detail/${rutines.name}`} >Detalles</Link>
                </div>
                
            </div>
            ))}
        </div>
    </div>
    )
}

export default Rutines;