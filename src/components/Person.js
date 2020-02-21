import React from 'react'

const Person = ({persons, filter}) =>{
    const f = filter.toLowerCase().trim()
    const t = persons.filter(person =>person.name.toLowerCase().indexOf(f) !== -1)
    return (
        t.map(p=><p key={p.name}>{p.name} {p.number}</p>)
    )
}

export default Person
