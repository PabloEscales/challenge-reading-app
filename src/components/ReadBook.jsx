// eslint-disable-next-line react/prop-types
function ReadBook({ img, title, handleRemoveBook, id }) {

  return (
    <>
      <ul className="books">
        <li onClick={()=> handleRemoveBook(id)}>
          <img src={img} alt={title} width={200} height={300} />
          {title}
        </li>
      </ul>
    </>
  )
}

export default ReadBook
