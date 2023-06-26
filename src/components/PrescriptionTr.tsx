import { FunctionComponent, useState } from 'react'
import { Badge, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Prescription } from '../types'
import { useNavigate } from 'react-router-dom'
import ModalDelete from './ModalDelete'
import useTranslationHook from '../hook/TranslationHook'

// Allows to change the colour if true or false
const toRenew = (renew: boolean): string => renew ? 'warning' : 'success'

interface PrescriptionTrProps {
  prescription: Prescription
  onDelete: (id: number) => Promise<void>
  onEdit: (id: number) => Promise<void>
}

const PrescriptionTr: FunctionComponent<PrescriptionTrProps> = ({ prescription, onDelete, onEdit }) => {
  const navigate = useNavigate()
  const { t } = useTranslationHook()

  const [show, setShow] = useState(false)
  const handleClose = (): void => setShow(false)
  const handleShow = (): void => setShow(true)

  const goToPatient = (id: number): void => {
    navigate(`/patients/${prescription.patient}`)
  }

  return (
    <tr>
      <td>{prescription.carte_vitale}</td>
      <td>{prescription.caisse_rattachement}</td>
      <td>{prescription.prescribing_doctor}</td>
      <td>{prescription.start_date}</td>
      <td>{prescription.end_date}</td>
      <td>
        <Badge bg={toRenew(prescription.at_renew)}>
          {prescription.at_renew ? 'Yes' : 'No'}
        </Badge>
      </td>
      <td>{prescription.photo_prescription === null ? <Button variant='info' href={prescription.photo_prescription} disabled><FontAwesomeIcon icon={['fas', 'eye']} /></Button> : <Button variant='info' href={prescription.photo_prescription}><FontAwesomeIcon icon={['fas', 'eye']} /></Button>}</td>
      <td>
        <Button variant='secondary' onClick={() => goToPatient(prescription.patient)}><FontAwesomeIcon icon={['fas', 'eye']} /></Button>
      </td>
      <td>
        <Button onClick={async () => await onEdit(prescription.id)}><FontAwesomeIcon icon={['fas', 'pencil']} /></Button>
      </td>
      <td>
        <Button onClick={handleShow} variant='danger'><FontAwesomeIcon icon={['fas', 'trash']} /></Button>
        {show && (
          <ModalDelete handleClose={handleClose} show={show} onDelete={async () => await onDelete(prescription.id)} confirmText={t('text.confirmationPrescription')} />
        )}
      </td>
    </tr>
  )
}

export default PrescriptionTr