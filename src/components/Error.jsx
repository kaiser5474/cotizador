import React from 'react'
import useCotizador from '../hooks/useCotizador';

const Error = () => {
    const { error } = useCotizador();
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 p-2 uppercase text-center">{error}</div>
  )
}

export default Error