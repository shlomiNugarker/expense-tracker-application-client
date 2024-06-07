import { Expense } from '../interfaces/Expense'
import { proxyService } from './proxy.service'

export const expenseService = {
  getExpenses,
  updateExpense,
  addExpense,
  remove,
}

async function getExpenses() {
  return await proxyService.get('/api/expense')
}
async function updateExpense(expense: Expense) {
  return await proxyService.put('/api/expense/update', expense)
}
async function addExpense(expense: Expense) {
  return await proxyService.post(`/api/expense/add`, expense)
}

async function remove(expenseId: string) {
  return await proxyService.remove(`/api/expense/${expenseId}`)
}
