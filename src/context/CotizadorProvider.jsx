import { createContext, useState } from 'react';
import {
    obtenerDiferenciaYear,
    calculoMarca, 
    calculoPlan, 
    formatearDinero} from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

    //Aca se declaran todos los Hooks, variables, etc que le vamos a pasar al value del Provider
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [resultado, setResultado] = useState("");
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState('');

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro  = () => {
        //Una base
        let resultado = 2000;

        //Obtener diferencia de años
        const diferenciaYear = obtenerDiferenciaYear(datos.year);

        //Hay que restar el 3% por cada año
        const restaYear = resultado * (diferenciaYear * 3/100)
        resultado -= restaYear;

        resultado = calculoMarca(datos.marca, resultado);
        resultado = calculoPlan(datos.plan, resultado);

        // resultado = resultado.toFixed(2);
        resultado = formatearDinero(resultado);        
        setResultado(resultado);
        
        setCargando(true);
        setTimeout(() => {
            setCargando(false);
        }, 1500);
    }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error, 
                setError,
                cotizarSeguro,
                resultado,
                cargando
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