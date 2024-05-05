import React from 'react'

interface FormFieldErrorProps {
  errorMessage: string | undefined
}

const FormFieldError: React.FC<FormFieldErrorProps> = ({ errorMessage }) => (
  <>
    {((errorMessage) != null) && (
      <span className='mt-4 text-danger'>
        {errorMessage}
      </span>
    )}
  </>
)

export default FormFieldError
