function Card({counter, count}) {
  
  const handlerClick = () => {
    count(counter)
  }

  return (
    <div>
        <button onClick={handlerClick}>Добавить в корзину: {counter} книг </button>
    </div>
  )
}
export default Card