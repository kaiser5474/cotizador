import Formulario from "./Formulario"

const AppSeguro = () => {
  return (
    <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">Cotizador de seguros de auto</h1>
        <main className="bg-white sm:w-2/3 md:w-2/3 lg:w-1/2 mx-auto rounded-lg p-10 shadow">
            <Formulario/>
        </main>
    </header>
  )
}

export default AppSeguro