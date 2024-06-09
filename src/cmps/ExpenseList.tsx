import { useOutletContext } from 'react-router-dom'
import { ExpensePreview } from './ExpensePreview'
import { ContextProps } from '../pages/MainPage'

export const ExpenseList = () => {
  const { expenses } = useOutletContext<ContextProps>()
  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpensePreview expense={expense} key={Math.random()} />
      ))}
    </ul>
  )
}
