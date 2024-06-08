import { User } from '../interfaces/User'
import { proxyService } from './proxy.service'

export const authService = {
  login,
  logout,
  signup,
  getLoggedUser,
}

const STORAGE_KEY_LOGGED_USER = 'logged_user'

async function login(userCred: { email: string; password: string }) {
  const user = await proxyService.post('/api/auth/login', userCred)
  if (user) return _saveLocalUser(user)
}

async function signup(userCred: User) {
  const user = await proxyService.post('/api/auth/signup', userCred)
  return _saveLocalUser(user)
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGED_USER)
  return await proxyService.post('/api/auth/logout')
}

function _saveLocalUser(user: User) {
  sessionStorage.setItem(STORAGE_KEY_LOGGED_USER, JSON.stringify(user))
  return user
}

function getLoggedUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGED_USER) || 'null')
}
