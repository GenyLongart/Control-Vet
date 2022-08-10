import Form from "./components/Form"
import Header from "./components/Header"
import PatientsList from "./components/PatientsList"
import {useState, useEffect} from 'react'


function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    const gettingLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsLS)
    }
    gettingLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify( patients ))
  }, [patients])

  const deletingPatient = id => {
    const updatedPatients = patients.filter( patient => patient.id !== id)
    setPatients(updatedPatients)
  }

  return (
    <div className="container mx-auto mt-20">
    <Header />
    <div className="mt-12 md:flex">
    <Form 
      patients = {patients}
      setPatients = {setPatients}
      patient = {patient}
      setPatient = {setPatient}
    />
    <PatientsList 
    patients = {patients}
    setPatient = {setPatient}
    deletingPatient = {deletingPatient}
    />
    </div>

    </div>
  )
}

export default App
