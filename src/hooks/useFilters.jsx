import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterBooks = (books) => {
    return books.filter(book => {
      return (
        filters.category === 'all' ||
        book.genre === filters.category
      )
    })
  }

  return { filters, filterBooks, setFilters }
}
