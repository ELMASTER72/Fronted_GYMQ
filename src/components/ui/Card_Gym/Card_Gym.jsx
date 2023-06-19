import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CardContext = createContext();

export const CardProvider = ({children}) => {
    const [gym, setGym] = useState([]);
    const [info, setInfo] = useState([]);

    const getGym = async () => {
        await axios
        .get("http://localhost:8080/api/gym/")
        .then(({data}) => setGym(data.gym))
    };

    const getGymData = async (name) => {
        await axios
        .get(`http://localhost:8080/api/gym/${name}`)
        .then(({data}) => setInfo(data.info))
    }
    useEffect(() => {
        getGym();
        getGymData();
    },[])

    
     return(
        <CardContext.Provider
        value={{gym,info}}
        >
            {children}
        </CardContext.Provider>
     )
};

export default CardContext;