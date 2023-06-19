import React, { useContext } from "react";
import CardRutineContext from "../../ui/CardRutine/Card_Rutine";
import styles from './styles.module.scss'
import { Link } from "react-router-dom";

const Rutines = () => {
    const {rutine} = useContext(CardRutineContext)

    return(
        <div className={styles.productsContainer}>
            {rutine.map((rutines,i) => (
                <div key={i} className={styles.product} >
                <img src={rutines.img} alt={rutines.name}/>
                <div>
                    <p>
                        {rutines.name}
                    </p>
                    <p>
                        {rutines.channel}
                    </p>
                    <Link to={`/detail/${rutines.name}`} >Detalles</Link>
                </div>
                
            </div>
            ))}
        </div>
    )
}

export default Rutines;