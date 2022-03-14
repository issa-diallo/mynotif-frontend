import axios from 'axios'
import { Patient, Profile, Token } from '../types'
import { BACKEND_URL } from './constants'

const getPatients = async (): Promise<Patient[]> => {
  const url = BACKEND_URL + '/patient/'
  const response = await axios.get<Patient[]>(url)
  return response.data
}

const login = async (username: string, password: string): Promise<Token> => {
  const data = { username, password }
  const url = BACKEND_URL + '/api-token-auth/'
  const response = await axios.post<Token>(url, data)
  return response.data
}

const register = async (username: string, password: string): Promise<{}> => {
  const data = { username, password }
  const url = BACKEND_URL + '/account/register'
  const response = await axios.post<{}>(url, data)
  return response.data
}

const getProfile = async (token: string): Promise<Profile> => {
  const url = BACKEND_URL + '/profile/'
  const headers = { Authorization: `Token ${token}` }
  const response = await axios.get<Profile>(url, { headers })
  return response.data
}

const updateUser = async (token: string, data: Profile): Promise<Profile> => {
  const url = BACKEND_URL + '/user/current/'
  const headers = { Authorization: `Token ${token}` }
  const response = await axios.patch<Profile>(url, data, { headers })
  return response.data
}

export {
  getPatients,
  login,
  register,
  getProfile,
  updateUser
}
