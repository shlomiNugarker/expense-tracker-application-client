import { Expense } from '../interfaces/Expense'
import { proxyService } from './proxy.service'

export const expenseService = {
  getExpenses,
  updateExpense,
  addExpense,
  remove,
  getExpenseById,
}

async function getExpenses(): Promise<Expense[]> {
  return await proxyService.get('/api/expense')
}
async function getExpenseById(_id: string): Promise<Expense[]> {
  return await proxyService.get('/api/expense/' + _id)
}
async function updateExpense(expense: Expense): Promise<Expense> {
  return await proxyService.put('/api/expense/' + expense._id, expense)
}
async function addExpense(expense: Expense): Promise<Expense> {
  return await proxyService.post(`/api/expense/`, expense)
}

async function remove(expenseId: string) {
  return await proxyService.remove(`/api/expense/${expenseId}`)
}
