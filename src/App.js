import React, { useState , useEffect } from 'react';
import Person from './components/Person'
import Message from './components/Message'
import Header from './components/Header'
import Filter from './components/Filter'
import Form from './components/Form'
import DB from './components/Database'

const App = () => {
  
  const [ persons, setPersons] = useState([]) 
  
  const [ newPerson, setNewPerson ] = useState({name: '', number: ''})
  
  const [ message, setMessage ] = useState('')
  
  const [ filter, setFilter ] = useState('')

  const addName = (e) => {
    e.preventDefault()
    if (persons.findIndex(element => element.name === newPerson.name) >= 0) {
      setMessage(newPerson.name + ' already exists in the list')
    } else {
      console.log(newPerson)
      
      DB.putData(newPerson).then(response=>{
        if(response.status === 201) {
          getPhones()
          setNewPerson({name: '', number: ''})
          setMessage('')
        } else {
          setMessage(response.statusText)
        }        
      })
      
        
    }    
  }
  //console.log(DB.getData)
  const update = (e, type) => {
    const temp = {...newPerson}
    temp[type]=e.target.value
    setNewPerson(temp)
  }

  const updateFilter = (e) => {
    setFilter(e)
  }

  const getPhones = () => {
    DB.getData().then(response=>{
      console.log(response.data)
      setPersons(response.data)
    })
  }

  useEffect(getPhones, [])

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
