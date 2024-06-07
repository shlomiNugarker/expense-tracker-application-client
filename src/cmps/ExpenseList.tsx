import { Expense } from '../interfaces/Expense'
import { ExpensePreview } from './ExpensePreview'

export const ExpenseList = ({ expenses }: { expenses: Expense[] }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpensePreview expense={expense} key={Math.random()} />
      ))}
    </ul>
  )
}
