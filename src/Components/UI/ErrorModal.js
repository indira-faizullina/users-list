import './ErrorModal.css'
import Card from './Card'
import Button from './Button'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

function Blackout(props) {
  return <div className="blackout" onClick={props.onCloseModal}></div>
}

function Modal(props) {
  return (
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
  )
}

function ErrorModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Blackout onCloseModal={props.onCloseModal} />,
        document.getElementById('blackout')
      )}
      {ReactDOM.createPortal(
        <Modal error={props.error} onCloseModal={props.onCloseModal} />,
        document.getElementById('modal')
      )}
    </Fragment>
  )
}

export default ErrorModal
