import { useState, useEffect } from 'react'
import Error from './Error'

function Form({patients, setPatients, patient, setPatient}) {


    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [symptoms, setSymptoms] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
      if (Object.keys(patient).length > 0){
        setName(patient.name)
        setOwner(patient.owner)
        setEmail(patient.email)
        setDate(patient.date)
        setSymptoms(patient.symptoms)
      }
    }, [patient])


    const generatingId = () => {
        const random = Math.random().toString(36).substring(2);
        const date = Date.now().toString(36);

        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation

        if ([name, owner, email, date, symptoms].includes('')){
            console.log('Hay al menos un campo vacío')
            setError(true)
            return
        } 

        setError(false)

        // Patient object

        const patientObject = {
            name, 
            owner, 
            email, 
            date, 
            symptoms,
            id: generatingId()
        }

        if (patient.id){
            //Editing register
            patientObject.id = patient.id
            const updatedPatients = patients.map( patientState => patientState.id === 
                patient.id ? patientObject : patientState)
                setPatients(updatedPatients)
                setPatient({})
        } else { 
            //Creating new register
            patientObject.id = generatingId()
            setPatients([...patients, patientObject])
        }
       

        // Form reset

        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptoms('')

    }

  return (
    <div className='md:w-1/2 lg:w-2/5  mx-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

        <p className=' text-lg mt-5 text-center mb-10'>
            Añade Pacientes y {''} <span className='text-indigo-600 font-bold'>Adminístralos</span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
            { error && <Error mensaje = 'Todos los campos son obligatorios'/>}
            <div className='mb-5'>
                <label 
                htmlFor='pet' 
                className='block text-gray-700 uppercase font-bold'> Nombre Mascota</label>
                <input
                id='pet'
                type = 'text'
                placeholder='Nombre de la mascota'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                htmlFor='owner' 
                className='block text-gray-700 uppercase font-bold'> Nombre Propietario</label>
                <input
                id='owner'
                type = 'text'
                placeholder='Nombre del propietario'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value = {owner}
                onChange = {(e) => setOwner(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                htmlFor='email' 
                className='block text-gray-700 uppercase font-bold'> Correo Electrónico</label>
                <input
                id='email'
                type = 'text'
                placeholder='Correo electrónico para contacto'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                htmlFor='discharge' 
                className='block text-gray-700 uppercase font-bold'> Alta</label>
                <input
                id='discharge'
                type = 'date'
                className='border-2 w-full p-2 mt-2 rounded-md'
                value = {date}
                onChange = {(e) => setDate(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                htmlFor='symptoms' 
                className='block text-gray-700 uppercase font-bold'> Síntomas</label>
               <textarea
               placeholder='Describe los síntomas...'
               className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
               id = 'symptoms'
               value = {symptoms}
                onChange = {(e) => setSymptoms(e.target.value)}
               /> 
            </div>
            <input
            type='submit'
            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold
             hover:bg-indigo-700 cursor-pointer transition-all'
            value = { patient.id ? 'Editar Paciente' : 'Agregar Paciente'}
            />
        </form>
    </div>
  )
}

export default Form