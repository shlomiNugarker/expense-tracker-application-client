import { useOutletContext } from 'react-router-dom'
import { Expense } from '../interfaces/Expense'
import { ContextProps } from '../pages/MainPage'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdEdit } from 'react-icons/md'

interface Props {
  expense: Expense
}

export const ExpensePreview = ({ expense }: Props) => {
  const { onDeleteExpense } = useOutletContext<ContextProps>()
  const navigate = useNavigate()
  const formattedDate = new Date(expense.date).toLocaleDateString()

  return (
    <div className="expense-preview">
      <div className="container">
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

          <MdEdit
            onClick={(ev) => {
              ev.stopPropagation()
              navigate(`/edit/${expense._id}`)
            }}
          />

          <RiDeleteBin6Line
            onClick={() => expense._id && onDeleteExpense(expense._id)}
          />
        </div>
      </div>
    </div>
  )
}
