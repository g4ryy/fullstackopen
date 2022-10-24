import React from 'react'

export default function Persons({persons, filterName, deletePerson}) {
    const confirmDelete = (person) => {
        if (window.confirm(`Delete ${person.name}?`)) {
            deletePerson(person.id)
        }
    }
    return persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
            .map(person => {
                return (
                    <div key={person.name}>
                        {person.name} {person.number} <button onClick={() => confirmDelete(person)}>delete</button>
                    </div>
                )
        })
}