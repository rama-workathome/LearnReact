import React from 'react'

const Countries = ({data, filter}) =>{
    const f = filter.toLowerCase()
    const t = data.filter(country =>country.name.toLowerCase().indexOf(f) !== -1)
    if (t.length > 10) {
        return (
            <p>Too many coutries to show</p>
        )
    } else if (t.length > 1 && t.length <= 10) {
        return (
            t.map(p=><p key={p.numericCode}>{p.name}</p>)
        )
    } else if (t.length === 1) {
        const single = t[0]
        return (
            <div>
                <h2>{single.name}</h2>
                <p>capital: {single.capital}</p>
                <p>population: {single.population}</p>
                <h3>languages</h3>
                <ul>
                {single.languages.map(s=> <li key={single.name}>{s.name}</li>)}
                </ul>
                <p><img src={single.flag} alt={single.name + ' flag'} width="200" border="1" /></p>
            </div>
        )
    } else {
        return (
            <p>Nothing to show. Start typing to filter.</p>
        )
    }   
}

export default Countries
