import './App.css'
import AddForm from './Components/Form/AddForm'
import List from './Components/List/List'
import React, { useState } from 'react'

function App() {
  const [userList, setUserList] = useState([])

  const createUserHandler = (name, age) => {
    setUserList((prevUserList) => [
      ...prevUserList,
      { id: Date.now().toString(), name, age },
    ])
  }

  return (
    <div>
      <AddForm onCreateUser={createUserHandler} />
      <List users={userList} />
    </div>
  )
}

export default App
