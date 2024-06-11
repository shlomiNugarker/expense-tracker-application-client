import { useNavigate, useOutletContext } from 'react-router-dom'
import { ExpenseFilter } from '../cmps/ExpenseFilter'
import { ExpenseList } from '../cmps/ExpenseList'
import { authService } from '../services/authService'
import { IoMdLogOut } from 'react-icons/io'
import { ContextProps } from './MainPage'

export const ExpensesPage = () => {
  const navigate = useNavigate()
  const { expenses } = useOutletContext<ContextProps>()
  return (
    <section className="expense-page">
      <ExpenseFilter />

      {!expenses.length && <div className="loading">Loading...</div>}

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
