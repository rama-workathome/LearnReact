import React, {useState, useEffect} from 'react';
import axios  from 'axios'
import Filter from './components/Filter';
import Countries from './components/Countries'

const App = () => {
  const [data, setData] = useState([])
  
  const [filter, setFilter] = useState('')

  const updateFilter = (e) => {
    setFilter(e)
  }

  const hookEffect = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all?fields=name;capital;languages;flag;population')
      .then(response=> {
        setData(response.data)
        
      })

  }

  useEffect(hookEffect, [])
  
  return (
    <div>
      <Filter v={filter} c={updateFilter} />
      <Countries data={data} filter={filter} />
    </div>
  )
}

export default App;
