import React from 'react'

const Person = ({persons}) => {

    return (
        <div>
        {persons.map(p=><p key={p.name}>{p.name}</p>)}
        </div>
    )
}

export default Person
