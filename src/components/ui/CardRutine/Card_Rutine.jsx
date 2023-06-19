import axios from "axios";
import { createContext, useEffect, useState } from "react";


const CardRutineContext = createContext();

export const CardrutineProvider  = ({children}) => {
    const [rutine,setRutine] = useState([]);

    const getRutine = async () =>{
        await axios
        .get("http://localhost:8080/api/rutine/")
        .then(({data}) => setRutine(data.rutine))
    };

    useEffect(() => {
        getRutine();
    },[])

    return(
        <CardRutineContext.Provider
        value={{rutine}}
        >
            {children}
        </CardRutineContext.Provider>
    )
}

export default CardRutineContext;