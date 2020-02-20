import React from 'react'

const Country = ({value}) => {
  //console.log(value)    
  return (
    <div>
      <h2>{value.name}</h2>
      <p>capital: {value.capital}</p>
      <p>population: {value.population}</p>
      <h3>languages</h3>
      <ul>
        {value.languages.map(s=> <li key={s.name}>{s.name}</li>)}
      </ul>
      <p><img src={value.flag} alt={value.name + ' flag'} width="200" border="1" /></p>
    </div>
  )
}

export default Country
