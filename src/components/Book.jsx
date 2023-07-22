// eslint-disable-next-line react/prop-types
function Book({ title, img, handleAddBook, id }) {

  console.log(img)

  return (
    <>
      <ul>
        <li onClick={()=> handleAddBook(id)}>{title}</li>
        <img src={img} alt={title} width={200} height={300} />
      </ul>
    </>
  )
}

export default Book
