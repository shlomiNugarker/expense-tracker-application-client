import { useNavigate } from 'react-router-dom'
import { ExpenseFilter } from '../cmps/ExpenseFilter'
import { ExpenseList } from '../cmps/ExpenseList'
import { authService } from '../services/authService'

export const ExpensesPage = () => {
  const navigate = useNavigate()
  return (
    <section className="expense-page">
      <ExpenseFilter />
      <ExpenseList />
      <button
        onClick={async () => {
          await authService.logout()
          navigate('/login')
        }}
      >
        logout
      </button>
    </section>
  )
}
