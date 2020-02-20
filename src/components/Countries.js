import React from 'react'
import Country from './Country'

const Countries = ({data, filter, buttonhandler, current}) =>{
    const f = filter.toLowerCase().trim()
    const t = data.filter(c =>c.name.toLowerCase().indexOf(f) !== -1)

    if (current === null) {
        if (t.length > 10) {
            return <p>Too many coutries to show. Start typing to filter.</p>
        } else if (t.length > 1 && t.length <= 10) {
            return (
                <div>
                     {t.map(country => <div key={country.name}><span>{country.name}</span> <button onClick={buttonhandler} country={country.alpha3Code}>Show</button></div>) }
                </div>
            )
        } else if (t.length === 1) {
            return <Country value={t[0]} />
        } else {
            return <p>Nothing to show. Type something else.</p>
        }    
    } else {
        return <Country value={current} />
    }    
}

export default Countries
