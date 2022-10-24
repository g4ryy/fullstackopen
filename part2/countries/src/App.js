import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Countries from './components/Countries';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filterName, setFilterName] = useState('')
  const [shownCountries, setShown] = useState([])

  useEffect(() => {
    const loadData = async () => axios.get('https://restcountries.com/v3.1/all').then(response => setCountries(response.data)) 
    loadData()
  }, [])

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
    if (event.target.value != '') {
      setShown(countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
    } else {
      setShown([])
    }
  }

  return (
    <div>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange}/>
      <Countries countries={shownCountries} setShown={setShown} setFilterName={setFilterName} />
    </div>
  )
}

export default App