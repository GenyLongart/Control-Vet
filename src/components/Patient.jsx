const Patient = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {''} <span className='font-normal normal-case'>Hook</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario: {''} <span className='font-normal normal-case'>Gene</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {''} <span className='font-normal normal-case'>correo@correo.com</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha Alta: {''} <span className='font-normal normal-case'>10 Diciembre de 2020</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Síntomas: {''} <span className='font-normal normal-case'>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Rem modi commodi ex necessitatibus vitae qui, 
            consequuntur officiis id sint quis, nobis vel provident voluptatibus beatae fuga 
            tempore minus repellat maiores.</span>
          </p>

        </div>
  )
}

export default Patient