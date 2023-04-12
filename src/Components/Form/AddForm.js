import './AddForm.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import React, { useState, Fragment } from 'react'

function AddForm(props) {
  const [inputUserName, setInputUserName] = useState('')
  const [inputUserAge, setInputUserAge] = useState('')
  const [error, setError] = useState(false)

  const createNewUserHandler = (event) => {
    event.preventDefault()

    if (!inputUserName.trim() || !inputUserAge.trim()) {
      setError({ title: 'Некорректный ввод', message: 'Заполните все поля!' })
      return
    }

    if (Number(inputUserAge) < 0) {
      setError({
        title: 'Некорректный возраст',
        message: 'Возраст не должен быть отрицательным числом.',
      })
      return
    }

    props.onCreateUser(inputUserName, inputUserAge)
    setInputUserName('')
    setInputUserAge('')
  }

  const inputUserNameHandler = (event) => {
    setInputUserName(event.target.value)
  }

  const inputUserAgeHandler = (event) => {
    setInputUserAge(event.target.value)
  }

  const closeModalHandler = () => setError(false)

  return (
    <Fragment>
      {error && <ErrorModal error={error} onCloseModal={closeModalHandler} />}
      <Card className="input-form">
        <form>
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            onChange={inputUserNameHandler}
            value={inputUserName}
          />
          <label htmlFor="age">Возраст</label>
          <input
            id="age"
            type="number"
            onChange={inputUserAgeHandler}
            value={inputUserAge}
          />
          <Button type="submit" onClick={createNewUserHandler}>
            Добавить пользователя
          </Button>
        </form>
      </Card>
    </Fragment>
  )
}

export default AddForm
