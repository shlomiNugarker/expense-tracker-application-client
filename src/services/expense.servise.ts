import { Expense } from '../interfaces/Expense'
import { proxyService } from './proxy.service'

export const expenseService = {
  getExpenses,
  remove,
  getExpenseById,
  save,
}

async function getExpenses(userId: string): Promise<Expense[]> {
  return await proxyService.get('/api/expense/expenses/' + userId)
}
async function getExpenseById(_id: string): Promise<Expense> {
  return await proxyService.get('/api/expense/' + _id)
}

async function remove(expenseId: string) {
  return await proxyService.remove(`/api/expense/${expenseId}`)
}

async function save(expense: Expense): Promise<Expense> {
  return expense._id
    ? await proxyService.put(`/api/expense/${expense._id}`, expense)
    : await proxyService.post('/api/expense/', expense)
}
