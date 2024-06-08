import { useOutletContext } from 'react-router-dom'
import { Expense } from '../interfaces/Expense'
import { ContextProps } from '../pages/HomePage'

interface Props {
  expense: Expense
}

export const ExpensePreview = ({ expense }: Props) => {
  const { onDeleteExpense } = useOutletContext<ContextProps>()

  const formattedDate = new Date(expense.date).toLocaleDateString()

  return (
    <div className="expense-preview">
      <div className="expense-preview__details">
        <h2>{expense.title}</h2>
        <p className="expense-preview__amount">${expense.amount?.toFixed(2)}</p>
        <p className="expense-preview__date">{formattedDate}</p>
      </div>
      <button
        className="expense-preview__delete"
        onClick={() => expense._id && onDeleteExpense(expense._id)}
      >
        Delete
      </button>
    </div>
  )
}
