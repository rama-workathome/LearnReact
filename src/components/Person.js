import React from 'react'

const Person = ({persons, filter, deleteHandler}) =>{
    const f = filter.toLowerCase().trim()
    const t = persons.filter(person =>person.name.toLowerCase().indexOf(f) !== -1)
    return (
        t.map(p=><p key={p.name}>{p.name} {p.number} <button id={p.id} name={p.name} onClick={deleteHandler}>delete {p.id}</button></p>)
    )
}

export default Person
