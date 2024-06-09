import { useEffect, useState } from 'react'
import { Expense } from '../interfaces/Expense'
import { Link, Outlet } from 'react-router-dom'
import { expenseService } from '../services/expense.servise'
import { authService } from '../services/authService'

export interface ContextProps {
  expenses: Expense[]
  onDeleteExpense: (_id: string) => void
  onAddExpense: (expense: Expense) => void
  onUpdatetExpense: (expense: Expense) => void
  filterBy: {
    category: string
    date: string
  }
  setFilterBy: React.Dispatch<
    React.SetStateAction<{
      category: string
      date: string
    }>
  >
}

export const MainPage = () => {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [filterBy, setFilterBy] = useState({ category: '', date: '' })

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
      const userId = authService.getLoggedUser()._id

      const expenses = await expenseService.getExpenses(userId)
      setExpenses(expenses)
    })()
  }, [])

  return (
    <main className={'main-page'}>
      <h1>Expense Tracker Application</h1>
      <header>
        <ul>
          <li>
            <Link to="chart">chart</Link>
          </li>
          <li>
            <Link to="expenses">expenses</Link>
          </li>
          <li>
            <Link to="edit">add</Link>
          </li>
        </ul>
      </header>
      <Outlet
        context={{
          expenses,
          onDeleteExpense,
          onAddExpense,
          onUpdatetExpense,
          filterBy,
          setFilterBy,
        }}
      />
    </main>
  )
}
