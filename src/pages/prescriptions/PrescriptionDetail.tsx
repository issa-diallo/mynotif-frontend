import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Patient, Prescription } from '../../types'
import Header from '../../components/Header'
import { getPatient, getPrescription } from '../../services/api'
import { TokenContext } from '../../context/token'
import assert from 'assert'
import { t } from 'i18next'
import { ContainerDetailPage } from '../../components/pageSections/ContainerDetailPage'
import { ProfileContainer } from '../../components/pageSections/ProfileContainer'
import { PrescriptionBanner } from '../../components/prescriptions/precriptionProfile.tsx/PrescriptionBanner'
import { capitalize } from 'lodash'
import { PrescriptionField } from '../../components/prescriptions/precriptionProfile.tsx/PrescriptionField'

const PrescriptionDetail = (): JSX.Element => {
  const { id } = useParams<'id'>()
  const { token } = useContext(TokenContext)
  const [prescriptionState, setPrescriptionState] = useState<Prescription | null>(null)
  const [patientState, setPatientState] = useState<Patient | null>(null)
  const navigate = useNavigate()

  const fetchPrescriptionCallback = useCallback(async (): Promise<void> => {
    assert(token)
    assert(id)
    try {
      const prescriptionData = await getPrescription(token, parseInt(id, 10))
      setPrescriptionState(prescriptionData)
      const patientData = await getPatient(token, prescriptionData.patient)
      setPatientState(patientData)
    } catch (error) {
      console.error(error)
    }
  }, [token, id])

  useEffect(() => {
    if (token === null) return
    // eslint-disable-next-line no-void
    void (async () => await fetchPrescriptionCallback())()
  }, [token, fetchPrescriptionCallback])

  const initials = (prescriptionState?.prescribing_doctor?.charAt(0) ?? '').toUpperCase() + (prescriptionState?.prescribing_doctor?.charAt(1) ?? '').toUpperCase()
  const fullNameDoctor = `Dr . ${capitalize(prescriptionState?.prescribing_doctor) ?? ''}`
  const fullNamePatient = `${patientState?.firstname ?? ''} ${patientState?.lastname ?? ''}`

  const goToEditPrescription = (): void => {
    if (prescriptionState?.id !== undefined) {
      navigate(`/prescriptions/edit/${prescriptionState.id}/`)
    } else {
      console.error('Patient is undefined')
    }
  }

  return (
    <>
      {prescriptionState !== null && patientState !== null
        ? (<ContainerDetailPage>
          <Header />
          <div className='flex-grow overflow-y-auto'>
            <ProfileContainer>
              <PrescriptionBanner onEditClick={goToEditPrescription} fullName={fullNameDoctor} initials={initials} />
              <PrescriptionField
                prescriptionState={prescriptionState}
                patientState={patientState}
                fullNamePatient={fullNamePatient}
              />
            </ProfileContainer>
          </div>
          <div className='bg-white p-4 mt-8 relative z-10 shadow-sm' />
          {/* eslint-disable-next-line */}
        </ContainerDetailPage>
        ) : (<h4 className='center'>{t('title.noPrescriptionToDisplay')}</h4>)}
    </>
  )
}

export default PrescriptionDetail
