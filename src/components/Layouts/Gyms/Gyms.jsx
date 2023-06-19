import React, { useContext } from "react";
import CardContext from "../../ui/Card_Gym/Card_Gym";
import styles from "./styles.module.scss"


const Gyms = () => {
    const {gym,info} = useContext(CardContext);
return(
    <div className={styles.productsContainer}>
        {gym &&
        gym.map((gyms, i) => (
            <div key={i} className={styles.product}>
                <img src={gyms.img} alt={gyms.name}/>
                <div>
                    <p>
                        {gyms.name}
                    </p>
                    <p>
                        {gyms.address}
                    </p>
                    <button>Detalles</button>
                </div>
                
            </div>
        ))}
    </div>
)
}

export default Gyms;

