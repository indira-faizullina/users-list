import './ErrorModal.css'
import Card from './Card'
import Button from './Button'

function ErrorModal(props) {
  return (
    <div>
      <div className="blackout" onClick={props.onCloseModal}></div>
      <Card className="modal">
        <header className="modal__header">
          <h2>{props.error.title}</h2>
        </header>
        <div className="modal__content">
          <p>{props.error.message}</p>
        </div>
        <footer className="modalfooter">
          <Button onClick={props.onCloseModal}>Закрыть</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal
