import { useEffect, useState } from 'react'
import { Expense } from '../interfaces/Expense'
import { Outlet } from 'react-router-dom'
import { expenseService } from '../services/expense.servise'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const categoriesOpts = [
  'Food',
  'Social Life',
  'Pets',
  'Transport',
  'Culture',
  'Household',
  'Apparel',
  'Beauty',
  'Health',
  'Education',
  'Gift',
  'Other',
]

export interface ContextProps {
  expenses: Expense[]
  onDeleteExpense: (_id: string) => void
  onAddExpense: (expense: Expense) => void
  onUpdatetExpense: (expense: Expense) => void
}

export const HomePage = () => {
  const [expenses, setExpenses] = useState<Expense[]>([])

  const onDeleteExpense = async (_id: string) => {
    console.log('onDeleteExpense: ', { _id })
    await expenseService.remove(_id)
  }

  const onAddExpense = async (expense: Expense) => {
    console.log('onAddExpense: ', { expense })
    return await expenseService.addExpense(expense)
  }

  const onGetExpenses = async () => {
    console.log('onGetExpenses: ')
    const expenses = await expenseService.getExpenses()
    setExpenses(expenses)
    return expenses
  }

  const onUpdatetExpense = async (expense: Expense) => {
    console.log('onUpdatetExpense: ', { expense })
    return await expenseService.updateExpense(expense)
  }

  useEffect(() => {
    onGetExpenses()
    // eslint-disable-next-line no-extra-semi
    // ;async () => {
    //   const expenses = await expenseService.getExpenses()
    //   setExpenses(expenses)
    // }
  }, [])

  return (
    <div>
      <h1>Expense Tracker</h1>

      <button
        onClick={() => {
          onAddExpense({
            title: 'title',
            category: 'category',
            date: new Date().getTime(),
            amount: 50,
            notes: ['find a job'],
          })
        }}
      >
        setExpenses
      </button>

      <Outlet
        context={{
          expenses,
          onDeleteExpense,
          onAddExpense,
          // onGetExpenses,
          onUpdatetExpense,
        }}
      />
    </div>
  )
}
