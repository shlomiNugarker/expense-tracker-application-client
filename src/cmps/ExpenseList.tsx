import { useOutletContext } from 'react-router-dom'
import { ExpensePreview } from './ExpensePreview'
import { ContextProps } from '../pages/MainPage'

export const ExpenseList = () => {
  const { expenses, filterBy } = useOutletContext<ContextProps>()

  function getFilteredExpenses() {
    return expenses.filter((ex) => {
      const matchesCategory = filterBy.category
        ? filterBy.category === ex.category
        : true

      const matchesDate = filterBy.date ? filterBy.date === ex.date : true

      return matchesCategory && matchesDate
    })
  }
  return (
    <ul className="expense-list">
      {getFilteredExpenses().map((expense) => (
        <ExpensePreview expense={expense} key={Math.random()} />
      ))}
    </ul>
  )
}
