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
        Select a Category:
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

      <p>select a date:</p>
      <input
        type="date"
        name="date"
        value={filterBy.date}
        onChange={(ev) => {
          setFilterBy({ ...filterBy, date: ev.target.value })
        }}
        required
      />
    </section>
  )
}
