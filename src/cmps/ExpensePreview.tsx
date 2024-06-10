import { Link, useOutletContext } from 'react-router-dom'
import { Expense } from '../interfaces/Expense'
import { ContextProps } from '../pages/MainPage'

interface Props {
  expense: Expense
}

export const ExpensePreview = ({ expense }: Props) => {
  const { onDeleteExpense } = useOutletContext<ContextProps>()

  const formattedDate = new Date(expense.date).toLocaleDateString()

  return (
    <div className="expense-preview">
      <Link to={`/edit/${expense._id}`}>
        <div className="expense-preview-details">
          <p>{expense.category}</p>
          <p>{expense.title}</p>
          <p>{expense.notes}</p>
          {expense.notes.map((note, idx) => {
            return <p key={note + idx}>{note},</p>
          })}
          <p className="expense-preview-date">{formattedDate}</p>
        </div>

        <div className="amount-remove">
          <p className="expense-preview-amount">
            ${expense.amount?.toFixed(2)}
          </p>
          <button onClick={() => expense._id && onDeleteExpense(expense._id)}>
            Delete
          </button>
        </div>
      </Link>
    </div>
  )
}
