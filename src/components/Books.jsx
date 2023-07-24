/* eslint-disable react/prop-types */
import Book from '../components/Book'
import ReadBook from '../components/ReadBook'

export default function Books({ filteredBooks, list, handleAddBook, handleRemoveBook }) {

  return (
    <>
      <main className='section--books'>
        <section>
          <strong>
            Libros disponibles: {filteredBooks.length}
          </strong>
          {
            filteredBooks.map(
              (book) => (
              <Book key={book.id} title={book.title} img={book.cover} id={book.id} handleAddBook={handleAddBook} />)
            )
          }
        </section>
        <section>
          <strong>
            List de lectura: {list.length}
            {
              list.map(
                (book) => (
                <ReadBook key={book.id} title={book.title} img={book.cover} id={book.id} handleRemoveBook={handleRemoveBook} />)
              )
            }
          </strong>
        </section>
      </main>
    </>
  )
}
