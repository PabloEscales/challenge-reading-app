/* eslint-disable react/prop-types */
import { useId } from 'react'
import '../Filters.css'

function Filters({ onChange }) {

  const categoryFilterId = useId()

  const handleChangeCategory = (e) => {
    onChange(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="Terror">Terror</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Zombies">Zombies</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
