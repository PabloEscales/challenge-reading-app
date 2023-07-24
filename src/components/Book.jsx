// eslint-disable-next-line react/prop-types
export default function Book({ title, img, handleAddBook, id }) {

  return (
    <>
      <ul className="books">
        <li onClick={()=> handleAddBook(id)}>{title}
          <img src={img} alt={title} width={200} height={300} />
        </li>
      </ul>
    </>
  )
}
