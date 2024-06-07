import { useState } from 'react'
import { Expense } from '../interfaces/Expense'
import { useOutletContext } from 'react-router-dom'
import { ContextProps } from '../pages/HomePage'

interface Props {
  expense: Expense | undefined
}

const ExpenseForm = ({ expense }: Props) => {
  const { onAddExpense } = useOutletContext<ContextProps>()

  const [formData, setFormData] = useState({
    title: expense?.title || '',
    category: expense?.category || '',
    date: expense?.date
      ? new Date(expense.date).toISOString().substring(0, 10)
      : '',
    amount: expense?.amount || '',
    notes: expense?.notes || [],
  })

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target
    setFormData({ ...formData, [name]: value })
  }

  const handleNotesChange = (index: number, value: string) => {
    const newNotes = [...formData.notes]
    newNotes[index] = value
    setFormData({ ...formData, notes: newNotes })
  }

  const addNote = () => {
    setFormData({ ...formData, notes: [...formData.notes, ''] })
  }

  const removeNote = (index: number) => {
    const newNotes = formData.notes.filter((_, i) => i !== index)
    setFormData({ ...formData, notes: newNotes })
  }

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const dataToSubmit = {
      ...formData,
      date: new Date(formData.date).getTime(),
    } as Expense

    onAddExpense(dataToSubmit)
    console.log({})
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Notes</label>
        {formData.notes.map((note, index) => (
          <div key={index} className="note">
            <input
              type="text"
              value={note}
              onChange={(e) => handleNotesChange(index, e.target.value)}
            />
            <button type="button" onClick={() => removeNote(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addNote}>
          Add Note
        </button>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default ExpenseForm
