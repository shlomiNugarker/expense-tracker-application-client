import { useState } from 'react'
import { Expense } from '../interfaces/Expense'
import { useOutletContext } from 'react-router-dom'
import { ContextProps } from '../pages/MainPage'

interface Props {
  expense: Expense
}

const ExpenseForm = ({ expense }: Props) => {
  const { onAddExpense, onUpdatetExpense } = useOutletContext<ContextProps>()

  const [formData, setFormData] = useState<Expense>(expense)

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target
    if (name === 'amount' && value) {
      setFormData({ ...formData, [name]: +value })
    } else setFormData({ ...formData, [name]: value })
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
      createdAt: new Date(formData.date).getTime(),
    } as Expense

    dataToSubmit._id
      ? onUpdatetExpense(dataToSubmit)
      : onAddExpense(dataToSubmit)
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
            <button
              className="remove-btn"
              type="button"
              onClick={() => removeNote(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button className="add-note-btn" type="button" onClick={addNote}>
          Add Note
        </button>
      </div>

      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  )
}

export default ExpenseForm
