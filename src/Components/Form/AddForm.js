import './AddForm.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import React, { useState } from 'react'

function AddForm(props) {
  const createNewUserHandler = (event) => {
    event.preventDefault()

    if (!inputUserName.trim() || !inputUserAge.trim()) {
      console.log('заполните все поля')
      return
    }

    if (Number(inputUserAge) < 0) {
      console.log('возраст не должен быть отрицательным числом')
      return
    }

    console.log(inputUserName, inputUserAge)
    setInputUserName('')
    setInputUserAge('')
  }

  const [inputUserName, setInputUserName] = useState('')
  const [inputUserAge, setInputUserAge] = useState('')

  const inputUserNameHandler = (event) => {
    setInputUserName(event.target.value)
  }

  const inputUserAgeHandler = (event) => {
    setInputUserAge(event.target.value)
  }

  return (
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
  )
}

export default AddForm
