import { User } from '../interfaces/User'
import { proxyService } from './proxy.service'

export const userService = {
  getUserById,
  saveUser,
}

async function getUserById(userId: string): Promise<User> {
  const user = await proxyService.get('user/' + userId)
  return user
}

async function saveUser(userToSave: User): Promise<User> {
  const savedUser = userToSave._id
    ? await proxyService.put(`user/` + userToSave._id, userToSave)
    : await proxyService.post(`user`, userToSave)

  return savedUser
}
