import React, { useState } from 'react';
import Person from './components/Person'
import Message from './components/Message'
import Header from './components/Header'
import Filter from './components/Filter'
import Form from './components/Form'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newPerson, setNewPerson ] = useState({name: '', number: ''})
  const [ message, setMessage ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const personsCopy = [...persons]
    const nameObject = {...newPerson}
    if (persons.findIndex(element => element.name === newPerson.name) >= 0) {
      setMessage(newPerson.name + ' already exists in the list')
    } else {
      personsCopy.push(nameObject)
      setPersons(personsCopy)
      setNewPerson({name: '', number: ''})
      setMessage('')
    }
  }
  
  
  const update = (e, type) => {
    const temp = {...newPerson}
    temp[type]=e.target.value
    setNewPerson(temp)
  }

  const updateFilter = (e) => {
    setFilter(e)
  }

  return (
    <div>
      <Header title="Phonebook" />
      <Message message={message} />
      <Filter v={filter} c={updateFilter} />
      <Header title="add new" />
      <Form submit={addName} data={newPerson} change={update}/>      
      <Header title="Numbers" />
      <Person persons={persons} filter={filter} />
    </div>
  )
}

export default App;
