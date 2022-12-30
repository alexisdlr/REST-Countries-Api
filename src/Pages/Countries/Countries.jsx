import React, { useEffect, useState } from 'react'
import Country from '../../Components/Country/Country'
import './countries.scss'
function Countries() {
  const [countries, setCountries] = useState([])
  const url = 'https://restcountries.com/v3.1/all'

  const getCountries = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setCountries(data))
  }

  useEffect(() => {
    getCountries()
  }, [])
  return (
    <div className='countries'>
      {
        countries ? countries.map((country, index) => (
          <Country country={country} key={index} />
        )) : 'no data'
      }
    </div>
  )
}

export default Countries