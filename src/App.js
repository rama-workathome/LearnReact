import React, { useState } from 'react';
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const personsCopy = [...persons]
    const nameObject = {
      name: newName
    }
    personsCopy.push(nameObject)
    setPersons(personsCopy)
    setNewName('')
    //console.log(persons)
  } 

  const updateName = (e) => {
    e.preventDefault()
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={updateName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Person persons={persons} />
    </div>
  )
}

export default App;
