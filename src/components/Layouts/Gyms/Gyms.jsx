import React, { useContext } from "react";
import CardContext from "../../ui/Card_Gym/Card_Gym";
import styles from "./styles.module.scss"
import { Link } from "react-router-dom";


const Gyms = () => {
    const {gym} = useContext(CardContext);

return(
    <div className={styles.productsContainer}>
        {gym.map((gyms, i) => (
            <div key={i} className={styles.product} >
                <img src={gyms.img} alt={gyms.name}/>
                <div>
                    <p key={gyms.name}>
                        {gyms.name}
                    </p>
                    <p>
                        {gyms.address}
                    </p>
                    <Link to={`/Information/${gyms.name}`} >Detalles</Link>
                </div>
                
            </div>
        ))}
    </div>
)
}


export default Gyms;

