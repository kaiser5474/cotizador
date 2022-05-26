import { createContext, useState } from 'react';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

    //Aca se declaran todos los Hooks, variables, etc que le vamos a pasar al value del Provider
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [error, setError] = useState('');
    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error, 
                setError
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )         
}

export{
    CotizadorProvider
}

export default CotizadorContext;