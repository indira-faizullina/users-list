import './App.css'
import AddForm from './Components/Form/AddForm'
import List from './Components/List/List'
import React, { useState, Fragment } from 'react'

function App() {
  const [userList, setUserList] = useState([])

  const createUserHandler = (name, age) => {
    setUserList((prevUserList) => [
      ...prevUserList,
      { id: Date.now().toString(), name, age },
    ])
  }

  return (
    <Fragment>
      <AddForm onCreateUser={createUserHandler} />
      <List users={userList} />
    </Fragment>
  )
}

export default App
