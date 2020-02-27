import React, { useState , useEffect } from 'react';
import Person from './components/Person'
import Message from './components/Message'
import Header from './components/Header'
import Filter from './components/Filter'
import Form from './components/Form'
import DB from './components/Database'

const App = () => {
  
  const [ persons, setPersons] = useState([]) 
  
  const [ newPerson, setNewPerson ] = useState({name: '', number: '', id: ''})
  
  const [ message, setMessage ] = useState('')
  
  const [ filter, setFilter ] = useState('')

  const addName = (e) => {
    e.preventDefault()
    const a = persons.findIndex(element => element.name === newPerson.name)
    if (a >= 0) {
      if (window.confirm(newPerson.name + ' already exists in the table. Do you wish to update the phone number?')) {
        DB.updateData(persons[a].id, newPerson).then(response=> {
          setMessage(`phone number for ${newPerson.name} has been updated to ${newPerson.number}`)
          getPhones()
          setNewPerson({name: '', number: '', id: ''})          
        })        
      }
    } else {
      //newPerson.id = persons.length + 1
      DB.putData(newPerson).then(response=>{
        if(response.status === 201) {
          getPhones()
          setNewPerson({name: '', number: '', id: ''})
          setMessage('')
        } else {
          setMessage(response.statusText)
        }        
      })       
    }    
  }

  const deleteName = (e) => {
    const id = e.target.attributes.id.value
    const name= e.target.attributes.name.value
    if (window.confirm('Are you sure you want to delete ' + name + '?')) {
      DB.removeData(id).then(response=>{
        if(response.status === 200) {
          getPhones()
          setMessage('Deleted ' + name + '. Status: ' + response.statusText)
        } else {
          setMessage('Error: ' + response.statusText)
        }
      })
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

  const getPhones = () => {
    DB.getData().then(response=>{
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
      <Person persons={persons} filter={filter} deleteHandler={deleteName} />
    </div>
  )
}

export default App;
