import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Patient } from '../types'
import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

interface PatientLineProps {
  patient: Patient
}

const PatientLine: FunctionComponent<PatientLineProps> = ({ patient }) => {
  const navigate = useNavigate()

  const goToPatient = (): void => {
    navigate(`/patients/${patient.id}`)
  }

  const capitalizeFirstLetter = (name: string): string =>
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

  return (
    <div onClick={goToPatient} className='p-4 space-y-4 relative z-10 h-auto overflow-hidden'>
      <div className='bg-white rounded-lg p-4 shadow-md'>
        <div className='flex items-center space-x-4 mb-2'>
          <div className='bg-colorsecondary rounded-full w-20 h-20 flex items-center justify-center '>
            <FontAwesomeIcon icon={['fas', 'id-badge']} className='text-colorprimary text-3xl' />
          </div>
          <div>
            <h3 className='font-semibold'>{capitalizeFirstLetter(patient.lastname)} {capitalizeFirstLetter(patient.firstname)}</h3>
          </div>
        </div>
        <div className='mb-4' />
        <div className='flex items-baseline space-x-2 text-gray-600'>
          {patient.street !== '' && patient.city !== '' && patient.zip_code !== '' && (
            <>
              <FontAwesomeIcon icon={['fas', 'map-marker']} className='text-black text-xl' />
              <p>{capitalizeFirstLetter(patient.street)}, {capitalizeFirstLetter(patient.city)} {patient.zip_code}</p>
            </>
          )}
        </div>
      </div>
    </div>

  )
}

export default PatientLine
