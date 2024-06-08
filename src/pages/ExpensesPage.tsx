import { useOutletContext } from 'react-router-dom'
import { ExpenseList } from '../cmps/ExpenseList'
import { ContextProps } from './MainPage'

export const ExpensesPage = () => {
  const { expenses } = useOutletContext<ContextProps>()

  return (
    <div>
      <ExpenseList expenses={expenses} />
    </div>
  )
}
