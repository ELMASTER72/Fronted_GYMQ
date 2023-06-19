import React, {  useState,useEffect } from "react";
import axios from "axios";
import styles from './styles.module.scss'


import { useParams } from "react-router-dom";


const Card_Gyms = () => {
const [details,setDetails] = useState([])
const {name} = useParams()
const getGymData = async () => {
    
    const result = await axios.get(`http://localhost:8080/api/gym/${name}`)
    

    const details = await result.data
    setDetails(details)

    console.log(details.find.location);
}
useEffect(() => {
    getGymData();
},[])

    return(
        <div className={styles.details}>
            <div className={styles.product}>
            <img src={details.find.img} />
                <div>
                    <p>
                        {details.find.name}
                    </p>
                    <p>
                        {details.find.address}
                    </p>
                </div>
                <div>
                    <iframe 
                    src={details.find.location} 
                    width="400" 
                      height="300" 
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