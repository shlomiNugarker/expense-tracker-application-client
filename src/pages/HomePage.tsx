import { useEffect, useState } from 'react'
import { Expense } from '../interfaces/Expense'
import { Outlet } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const categoriesOpts = [
  'Food',
  'Social Life',
  'Pets',
  'Transport',
  'Culture',
  'Household',
  'Apparel',
  'Beauty',
  'Health',
  'Education',
  'Gift',
  'Other',
]

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
              date: new Date().getTime(),
              amount: 50,
              notes: ['find a job'],
            },
          ])
        }}
      >
        setExpenses
      </button>
      <p>expenses:</p>
      <p>{JSON.stringify(expenses, null, 2)}</p>
      <Outlet context={expenses} />
    </div>
  )
}
