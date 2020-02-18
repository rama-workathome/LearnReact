import React, { useState } from 'react';
import Person from './components/Person'
import Message from './components/Message'
import Header from './components/Header'

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
  const [ filter, setFilter ] = useState('')

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

  const updateFilter = (e) => {
    e.preventDefault()
    setFilter(e.target.value)
  }

  return (
    <div>
      <Header title="Phonebook" />
      <Message message={message} />
        <p>
          filter shown with <input value={filter} onChange={updateFilter} />
        </p>
      <Header title="add new" />
      <form onSubmit={addName}>
        <p>
          name: <input value={newName} onChange={updateName}/>
        </p>
        <p>
          number: <input value={newNumber} onChange={updateNumber}/>
        </p>
        <p>
          <button type="submit">add</button>
        </p>
      </form>
      <Header title="Numbers" />
      <Person persons={persons} filter={filter} />
    </div>
  )
}

export default App;
