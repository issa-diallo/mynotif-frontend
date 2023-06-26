import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FunctionComponent } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Prescription } from '../types'
import PrescriptionTr from './PrescriptionTr'
import useTranslationHook from '../hook/TranslationHook'

interface PrescriptionsProps {
  prescriptions: Prescription[]
  onDelete: (id: number) => Promise<void>
  onEdit: (id: number) => Promise<void>
}

const Prescriptions: FunctionComponent<PrescriptionsProps> = ({
  prescriptions,
  onDelete,
  onEdit
}) => {
  const { t } = useTranslationHook()
  return (
    <>
      <h1>{t('title.listPrescriptions')}</h1>
      <div>
        <Button href='/prescriptions/create'>
          <FontAwesomeIcon icon={['fas', 'file-medical']} />
        </Button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Carte vitale</th>
            <th>Caisse rattachement</th>
            <th>Prescribing doctor</th>
            <th>Start date</th>
            <th>End date</th>
            <th>To renew</th>
            <th>Photo prescription</th>
            <th>Patient</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <PrescriptionTr
              key={prescription.id}
              prescription={prescription}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Prescriptions