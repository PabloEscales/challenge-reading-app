// eslint-disable-next-line react/prop-types
function ReadBook({ title, handleRemoveBook, id }) {

  return (
    <>
      <ul>
        <li onClick={()=> handleRemoveBook(id)}>{title}</li>
      </ul>
    </>
  )
}

export default ReadBook
