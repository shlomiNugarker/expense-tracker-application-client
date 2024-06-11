import { useEffect, useState } from 'react'
import ExpenseForm from '../cmps/ExpenseForm'
import { useParams } from 'react-router-dom'
import { expenseService } from '../services/expense.servise'
import { Expense } from '../interfaces/Expense'

const newExpense: Expense = {
  title: '',
  category: '',
  date: new Date().toISOString().slice(0, 10),
  amount: 0,
  notes: [],
}

export const EditPage = () => {
  const [expense, setExpense] = useState<Expense | null>(null)
  const { expenseId } = useParams()

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      if (expenseId) {
        const expense = await expenseService.getExpenseById(expenseId)
        if (expense) setExpense(expense)
      } else setExpense({ ...newExpense })
    })()
  }, [expenseId])

  return (
    <section className="edit-page">
      {expense && <ExpenseForm expense={expense} />}
    </section>
  )
}
