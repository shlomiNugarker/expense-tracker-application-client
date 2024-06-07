import { useEffect, useState } from 'react'
import { Expense } from '../interfaces/Expense'

export const HomePage = () => {
  const [expenses, setExpenses] = useState<Expense[]>([])

  useEffect(() => {
    console.log({ expenses })
  }, [expenses])

  return (
    <div>
      <button
        onClick={() => {
          setExpenses((prev) => [
            ...prev,
            {
              category: 'category',
              date: 'date',
              notes: ['find a job'],
            },
          ])
        }}
      >
        setExpenses
      </button>
    </div>
  )
}
