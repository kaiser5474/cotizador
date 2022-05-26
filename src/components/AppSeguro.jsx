import Formulario from "./Formulario"
import useCotizador from '../hooks/useCotizador';
import Spinner from "./Spinner";
import Resultado from "./Resultado";

const AppSeguro = () => {
  const {resultado, cargando} = useCotizador();
  return (
    <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black mb-5">Cotizador de seguros de auto</h1>
        <main className="bg-white sm:w-2/3 md:w-2/3 lg:w-1/2 mx-auto rounded-lg p-10 shadow">
            <Formulario/>
            {cargando && <Spinner/> }   
            { resultado !== "" && !cargando && <Resultado/>}        
        </main>
    </header>
  )
}

export default AppSeguro