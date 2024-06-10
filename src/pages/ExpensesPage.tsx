import { useNavigate } from 'react-router-dom'
import { ExpenseFilter } from '../cmps/ExpenseFilter'
import { ExpenseList } from '../cmps/ExpenseList'
import { authService } from '../services/authService'
import { IoMdLogOut } from 'react-icons/io'

export const ExpensesPage = () => {
  const navigate = useNavigate()
  return (
    <section className="expense-page">
      <ExpenseFilter />
      <ExpenseList />
      <div className="logout-btn">
        <span>
          <button
            className="logout-btn"
            onClick={async () => {
              await authService.logout()
              navigate('/login')
            }}
          >
            <IoMdLogOut />
            logout
          </button>
        </span>
      </div>
    </section>
  )
}
