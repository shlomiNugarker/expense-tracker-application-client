import { useOutletContext } from 'react-router-dom'
import { Expense } from '../interfaces/Expense'

export const ExpensesPage = () => {
  const expenses = useOutletContext<Expense[]>()
  console.log({ expenses })

  return <div>ExpensePage</div>
}
