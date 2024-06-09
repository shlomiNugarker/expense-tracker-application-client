import { useOutletContext } from 'react-router-dom'
import { ContextProps } from '../pages/MainPage'

export const categoriesOpts = [
  '',
  'Travel',
  'Salaries and Wages',
  'Rent',
  'Insurance',
  'Taxes',
  'Supplies',
  'Food',
]

export const ExpenseFilter = () => {
  const { filterBy, setFilterBy } = useOutletContext<ContextProps>()

  return (
    <section>
      <label>
        Select Category:
        <select
          value={filterBy.category}
          onChange={(ev) =>
            setFilterBy({ ...filterBy, category: ev.target.value })
          }
        >
          {categoriesOpts.map((c) => (
            <option key={c} value={c}>
              {c || 'Choose Category'}
            </option>
          ))}
        </select>
      </label>
    </section>
  )
}
