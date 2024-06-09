import { ExpenseFilter } from '../cmps/ExpenseFilter'
import { ExpenseList } from '../cmps/ExpenseList'

export const ExpensesPage = () => {
  return (
    <section className="expense-page">
      <ExpenseFilter />
      <ExpenseList />
    </section>
  )
}
