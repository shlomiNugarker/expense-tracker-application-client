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
    const data = await expenseService.remove(_id)
    const updatedExpenses = expenses.filter(
      (expense) => expense._id !== data._id
    )
    setExpenses(() => updatedExpenses)
  }

  const onAddExpense = async (expense: Expense) => {
    const addedExpense = await expenseService.save(expense)
    setExpenses((prev) => [...prev, addedExpense])
    return addedExpense
  }

  const onUpdatetExpense = async (expense: Expense) => {
    const updatedExpense = await expenseService.save(expense)
    setExpenses((prev) =>
      prev.map((ex) => (ex._id === expense._id ? updatedExpense : ex))
    )
  }

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const expenses = await expenseService.getExpenses()
      setExpenses(expenses)
    })()
  }, [])

  return (
    <div>
      <h1>Expense Tracker</h1>

      {/* <button
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
        onAddExpense
      </button> */}

      <Outlet
        context={{
          expenses,
          onDeleteExpense,
          onAddExpense,
          onUpdatetExpense,
        }}
      />
    </div>
  )
}
