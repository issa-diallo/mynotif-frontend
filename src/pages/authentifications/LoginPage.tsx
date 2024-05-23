import { HeaderAuth } from '../../components/authentifications/HeaderAuth'
import { WelcomeAuth } from '../../components/authentifications/WelcomeAuth'
import LoginForm from '../../components/forms/LoginForm'
import { ResetPasswordLink } from '../../components/authentifications/ResetPasswordLink'
import { Separator } from '../../components/module/Separator'
import { RegisterLink } from '../../components/authentifications/RegisterLink'
import useTranslationHook from '../../hook/TranslationHook'
import { useIsLoggedIn } from '../../utils/hooks'
import { Navigate } from 'react-router-dom'

const LoginPage = (): JSX.Element => {
  const { t } = useTranslationHook()
  const isLoggedIn = useIsLoggedIn()

  // If the user is already logged in, redirect to another page
  if (isLoggedIn === true) {
    return <Navigate to='/home' replace />
  }

  return (
    <>
      <HeaderAuth />
      <div className='bg-gray-50 p-4 relative z-10 h-80 -mt-72 rounded-t-2xl'>
        <WelcomeAuth title={t('title.welcomeApp')} description={t('title.login')} />
        <LoginForm />
        <ResetPasswordLink content={t('navigation.resetPassword')} />
        <Separator />
        <RegisterLink textcontent={t('text.notAlreadyAccount')} textAnchor={t('navigation.register')} />
      </div>
    </>
  )
}

export default LoginPage
