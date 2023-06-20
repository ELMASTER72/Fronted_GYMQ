import React, { useContext,useState } from "react";
import CardContext from "../../ui/Card_Gym/Card_Gym";
import styles from "./styles.module.scss"
import { Link } from "react-router-dom";


const Gyms = () => {
    const {gym} = useContext(CardContext);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        };
    const filterCard = gym.filter((gyms) => {
        if(searchQuery && !gyms.name.toLowerCase().includes(searchQuery.toLowerCase())){
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
        {gym &&
        filterCard.map((gyms, i) => (
            <div key={i} className={styles.product} >
                <img src={gyms.img} alt={gyms.name}/>
                <div>
                    <p key={gyms.name}>
                        {gyms.name}
                    </p>
                    <p>
                        {gyms.address}
                    </p>
                </div>
                <Link className={styles.btn} to={`/Information/${gyms.name}`} >Detalles</Link>
                
            </div>
        ))}
    </div>
</div>
)
}


export default Gyms;

