import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CardContext = createContext();

export const CardProvider = ({children}) => {
    const [gym, setGym] = useState([]);


    const getGym = async () => {
        await axios
        .get("http://localhost:8080/api/gym/")
        .then(({data}) => setGym(data.gym))
    };


    useEffect(() => {
        getGym();
    },[])

    
     return(
        <CardContext.Provider
        value={{gym}}
        >
            {children}
        </CardContext.Provider>
     )
};

export default CardContext;