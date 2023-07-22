import { useEffect, useState } from 'react'
import './App.css'
import data from '../public/data'
import Book from './components/Book'
import ReadBook from './components/ReadBook'

function App() {

  const INITIAL_STATE = data.library

  const [books, setBooks] = useState([])
  const [list, setList] = useState([])

  useEffect (() => {
    setBooks(INITIAL_STATE)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddBook = (id) => {
    const bookSelected = books.filter((item) => item.book.ISBN === id)
    setList([...list, bookSelected[0]])
    setBooks(books.filter((item) => item.book.ISBN !== id))
  }

  const handleRemoveBook = (id) => {
    const bookSelected = list.filter((item) => item.book.ISBN === id)
    setBooks([...books, bookSelected[0]])
    setList(list.filter((item) => item.book.ISBN !== id))
  }

  return (
    <main className='App'>
      <section>
        <strong>
          Libros disponibles: {books.length}
        </strong>
        {
          books.map(
            (item) => (
            <Book key={item.book.ISBN} title={item.book.title} img={item.book.cover} id={item.book.ISBN} handleAddBook={handleAddBook} />)
          )
        }
      </section>
      <section>
        <strong>
          List de lectura: {list.length}
          {
            list.map(
              (item) => (
               <ReadBook key={item.book.ISBN} title={item.book.title} id={item.book.ISBN} handleRemoveBook={handleRemoveBook} />)
            )
          }
        </strong>
      </section>
    </main>
  )
}

export default App


// const bookSelected = books.filter((item) => item.book.ISBN === id)
