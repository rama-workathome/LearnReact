import React, { useState } from 'react';
import Person from './components/Person'
import Message from './components/Message'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ message, setMessage ] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const personsCopy = [...persons]
    const nameObject = {
      name: newName
    }
    if (persons.findIndex(element => element.name === newName) >= 0) {
      setMessage(newName + ' already exists in the list')
    } else {
      personsCopy.push(nameObject)
      setPersons(personsCopy)
      setNewName('')
    }
  } 

  const updateName = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
    setMessage('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={updateName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><Person key={person.name} person={person} />)}
    </div>
  )
}

export default App;
