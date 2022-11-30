import './modal.css'

function ModalWindow({header ,children, onRemoveModal}) {
  return (
    <div className="modal">
        <div className='modal__content'>
            <h1>{header}</h1>
            <p>{children}</p>
            <button onClick={onRemoveModal}>Закрыть окно</button>
        </div>
    </div>
  )
}

export default ModalWindow