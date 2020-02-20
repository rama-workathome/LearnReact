import React, {useState, useEffect} from 'react';
import axios  from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () => {
  const [data, setData] = useState([])
  const hookEffect = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all?fields=name;capital;languages;flag;population;numericCode;alpha3Code')
      .then(response=> {
        setData(response.data)
      })
  }
  useEffect(hookEffect, [])

  const [filter, setFilter] = useState('')

  const updateFilter = (e) => {
    setFilter(e.target.value)
    setCurrent(null)
  }

  const [current, setCurrent] = useState(null)

  const updateFilterCountry = (e) => {
    //console.log(e.target.attributes.country.value)
    const alpha3Code = e.target.attributes.country.value
    const t = data.filter(c =>c.alpha3Code.indexOf(alpha3Code) !== -1)
    setCurrent(t[0])    
  }

  return (  
    <div>
      <Filter v={filter} c={updateFilter} />
      <Countries data={data} filter={filter} buttonhandler={updateFilterCountry} current={current}/>
    </div>
  )
}

export default App;
