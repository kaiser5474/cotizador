import { Fragment } from 'react';
import {MARCAS, YEARS, PLANES} from '../constants';
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {
const { datos, handleChangeDatos, error, setError } = useCotizador();
const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(datos).includes('')){
        setError("Todos los campos obligatorios");
        return;
    }else{
        setError("");
    }
}
  return (
    <>
        {error && <Error/>}
        <form onSubmit={handleSubmit}>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Marca
                </label>
                <select 
                    name="marca" 
                    className="w-full p-3 bg-white border border-gray-200" 
                    onChange={e => handleChangeDatos(e)}
                    value={datos.marca}
                >
                    <option value="">--Selecciona Marca--</option>
                    {MARCAS.map(marca => (
                      <option value={marca.id} key={marca.id}>{marca.nombre}</option>  
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Año
                </label>
                <select 
                    name="year" 
                    className="w-full p-3 bg-white border border-gray-200"
                    onChange={e => handleChangeDatos(e)}
                    value={datos.year}
                >
                    <option value="">--Selecciona Año--</option>
                    {YEARS.map((year, index) => (
                      <option value={index} key={index}>{year}</option>  
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="block mb-3 font-bold text-gray-400 uppercase">
                    Elige un plan
                </label>
                <div className="flex gap-3 items-center justify-center" >
                    {PLANES.map(plan => (
                        <Fragment key={plan.id}>
                            <label>{plan.nombre}</label>
                            <input 
                                name="plan"
                                type="radio"
                                value={plan.id}
                                onChange={e => handleChangeDatos(e)}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            <input
                type="submit"
                value="Cotizar"
                className="w-full bg-indigo-500 p-2 text-white uppercase hover:bg-indigo-700 font-bold transition-colors cursor-pointer"
            />
        </form>
    </>
  )
}

export default Formulario