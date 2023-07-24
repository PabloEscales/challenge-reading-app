import { useState } from 'react'
import './App.css'
import data from './services/data'
import Books from './components/Books'
import Header from './components/Header'
import { useFilters } from './hooks/useFilters'

function App() {
  const INITIAL_STATE = data.library

  const { filterBooks, setFilters } = useFilters()

  const [books, setBooks] = useState(INITIAL_STATE)
  const [list, setList] = useState([])

  const handleAddBook = (id) => {
    const bookSelected = books.filter((book) => book.id === id)
    setList([...list, bookSelected[0]])
    setBooks(books.filter((book) => book.id !== id))
  }

  const handleRemoveBook = (id) => {
    const bookSelected = list.filter((book) => book.id === id)
    setBooks([...books, bookSelected[0]])
    setList(list.filter((book) => book.id !== id))
  }

  const filteredBooks = filterBooks(books)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Books filteredBooks={filteredBooks} list={list} handleAddBook={handleAddBook} handleRemoveBook={handleRemoveBook} />
    </>
  )
}

export default App
