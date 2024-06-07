import { useOutletContext } from 'react-router-dom'
import { Expense } from '../interfaces/Expense'

export const ChartPage = () => {
  const expenses = useOutletContext<Expense[]>()
  console.log({ expenses })
  return <div>ChartPage</div>
}
