import React, {  useState,useEffect } from "react";
import axios from "axios";
import styles from './styles.module.scss'
import ReactPlayer from "react-player";

import { useParams } from "react-router-dom";


const Card_Rutine= () => {
const [details,setDetails] = useState([])
const {name} = useParams()
const getRutineData = async () => {
    
    const result = await axios.get(`http://localhost:8080/api/rutine/${name}`)
    

    const details = await result.data
    setDetails(details)

    console.log(details.find.url);
}
useEffect(() => {
    getRutineData();
},[])

    return(
        <div className={styles.details}>
            <div className={styles.product}>
                <div>
                    <p>
                        {details.find.name}
                    </p>
                    <p>
                        {details.find.channel}
                    </p>         
                </div>
            </div>
            <div className={styles.video}>
                <ReactPlayer controls url={details.find.url}/>
            </div>
            <a href="/visual_Rutine">Volver</a>
        </div>
            
    ) 
    
}

export default Card_Rutine;