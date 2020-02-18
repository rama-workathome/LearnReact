import React, { useState } from 'react';
import Person from './components/Person'
import Message from './components/Message'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ message, setMessage ] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const personsCopy = [...persons]
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (persons.findIndex(element => element.name === newName) >= 0) {
      setMessage(newName + ' already exists in the list')
    } else {
      personsCopy.push(nameObject)
      setPersons(personsCopy)
      setNewName('')
      setNewNumber('')
    }
  } 

  const updateName = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
    setMessage('')
  }

  const updateNumber = (e) => {
    e.preventDefault()
    setNewNumber(e.target.value)
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
          number: <input value={newNumber} onChange={updateNumber}/>
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
