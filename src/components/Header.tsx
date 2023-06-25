import { useCallback, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios, { AxiosError } from 'axios'
import { ErrorResponse } from '../types'
import { useIsLoggedIn, useLogout } from '../utils/hooks'
import { getTokenLocalStorage } from '../utils/helpers'
import { ErrorContext, ErrorType } from '../context/error'
import { ProfileContext } from '../context/profile'
import { TokenContext } from '../context/token'
import { getProfile } from '../services/api'
import { BACKEND_URL } from '../services/constants'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import useTranslationHook from '../hook/TranslationHook'

const Header = (): JSX.Element => {
  const { token, setToken } = useContext(TokenContext)
  const { profile, setProfile } = useContext(ProfileContext)
  const { addError } = useContext(ErrorContext)
  const logout = useLogout()
  const { t } = useTranslationHook()

  const addErrorCallback = useCallback(
    (error: ErrorType) => addError(error),
    // eslint-disable-next-line
    []
  )

  const handleFetchProfileErrorCallback = useCallback((error: unknown | AxiosError): void => {
    console.error(error)
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>
      const { response } = axiosError
      if ((response?.status === 401) && (response.data?.detail === 'Invalid token.')) {
        addErrorCallback({ body: 'Session expired, please log in again.' })
        logout()
      }
    } else {
      addErrorCallback({ body: 'Error fetching profile data' })
    }
  },
  // eslint-disable-next-line
    [addErrorCallback]
  )

  const fetchProfileCallback = useCallback(async (token: string): Promise<void> => {
    try {
      const data = await getProfile(token)
      setProfile(data)
    } catch (error: unknown | AxiosError) {
      handleFetchProfileErrorCallback(error)
    }
    // eslint-disable-next-line
  }, [addErrorCallback, handleFetchProfileErrorCallback])

  // fetch profile
  useEffect(() => {
    if (token === null || token === undefined) return
    // eslint-disable-next-line no-void
    void (async () => await fetchProfileCallback(token))()
  }, [token, fetchProfileCallback])

  useEffect(() => {
    setToken(getTokenLocalStorage())
  }, [setToken])

  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Container>
        <Navbar.Brand as={Link} to={process.env.PUBLIC_URL}>
          <FontAwesomeIcon icon={['fas', 'user-nurse']} /> MyNotif
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to={process.env.PUBLIC_URL}>
              <FontAwesomeIcon icon={['fas', 'home']} /> {t('text.home')}
            </Nav.Link>
          </Nav>
          {useIsLoggedIn() === true ? (
            <>
              {profile.is_staff && (
                <Nav className='mr-auto'>
                  <Nav.Link href={`${BACKEND_URL}/admin`}>
                    <FontAwesomeIcon icon={['fas', 'user-shield']} /> {t('text.admin')}
                  </Nav.Link>
                </Nav>
              )}
              <Nav className='mr-auto'>
                <Nav.Link as={Link} to='/profile'>
                  <FontAwesomeIcon icon={['fas', 'user']} /> {t('text.profile')}
                </Nav.Link>
              </Nav>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} to='/patients'>
                  <FontAwesomeIcon icon={['fas', 'user-injured']} /> {t('text.patients')}
                </Nav.Link>
              </Nav>
              <Nav className='mr-auto'>
                <Nav.Link as={Link} to='/prescriptions'>
                  <FontAwesomeIcon icon={['fas', 'file-medical']} /> {t('text.prescription')}
                </Nav.Link>
              </Nav>
              <div className='ms-auto'>
                <Logout />
              </div>
            </>
          ) : (
            <>
              <Register />
              <Login />
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
