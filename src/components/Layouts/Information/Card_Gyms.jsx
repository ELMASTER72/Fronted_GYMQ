import React, {  useState,useEffect } from "react";
import axios from "axios";
import styles from './styles.module.scss'
import { useParams } from "react-router-dom";
import Table from "./Table";

const Card_Gyms = () => {
const [details,setDetails] = useState([])
const {name} = useParams()
const getGymData = async () => {
    
    const result = await axios.get(`http://localhost:8080/api/gym/${name}`)
    

    const details = await result.data
    setDetails(details)


}
useEffect(() => {
    getGymData(); 
},[])

    return(
        <div className={styles.details}>
            <div>
                    <p style={{ fontSize: '200%', color: 'white' }}>
                        {details.find.name}
                    </p>
                    <p style={{ fontSize: '200%', color: 'white' }}>
                        {details.find.address}
                    </p>
                </div>
                <Table /> 
                <div className={styles.product}>
                    <img src={details.find.img} />
                    <div className={styles.adress}>
                        <iframe 
                        src={details.find.location} 
                        width="800" 
                        height="600" 
                        style={{border:"0" }}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
        </div>
            
    ) 
    
}

export default Card_Gyms;