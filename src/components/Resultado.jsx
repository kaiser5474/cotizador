import { useCallback, useMemo } from 'react';
import '../styles/General.css';
import useCotizador from '../hooks/useCotizador';

const Resultado = () => {
    const { resultado, datos } = useCotizador();
    
    const { marca, plan, year } = useCallback(datos, [resultado]);

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
        <p className="my-2">
            <span className="font-bold">Marca: </span>
            {marca}
        </p>
        <p className="my-2">
            <span className="font-bold">Plan: </span>
            {plan === '1' ? 'Básico' : 'Completo'}
        </p>
        <p className="my-2">
            <span className="font-bold">Año del auto: </span>
            {year}
        </p>
        <p className="my-2 text-2xl">
            <span className="font-bold">Resultado:  </span>
            {resultado}
        </p>
        
    </div>
  )
}

export default Resultado