import { useState, useEffect } from 'react'
import contactServices from './services/contacts'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import './styles.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notif, setNotif] = useState(null)

  useEffect(() => {
    //const loadData = async () => axios.get('http://localhost:3001/persons').then(response => setPersons(response.data)) 
    //loadData()
    contactServices.getAll().then(response => setPersons(response))
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  const displayNotif = (message, isError) => {
    setNotif([message, isError])

    setTimeout(() => setNotif(null), 5000)
  }

  const addPerson = event => {
    event.preventDefault()
    const filteredList = persons.filter(person => person.name === newName)
    if (filteredList.length > 0) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const oldPerson = filteredList[0]
        const newPerson = {name: newName, number: newNumber}
        contactServices.update(oldPerson.id, newPerson).then(response => setPersons(persons.map(person => person.id !== oldPerson.id ? person : response)))
        setNewName('')
        setNewNumber('')
        displayNotif(`updated number for ${newName}`, false)
      }
    } else {
      const newPerson = {name: newName, number: newNumber}
      contactServices.create(newPerson).then(response => setPersons(persons.concat(response)))
      setNewName('')
      setNewNumber('')
      displayNotif(`Added ${newName}`, false)
    }
  }

  const deletePerson = id => {
    contactServices.delContact(id).catch(error => displayNotif(`Information of ${persons.filter(person => person.id === id)[0].name} has already been removed from server`, true));
    setPersons(persons.filter(person => person.id != id))
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notif} />
      <Filter filterName={filterName} handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filterName={filterName} deletePerson={deletePerson}/>
    </div>
  )
}

export default App