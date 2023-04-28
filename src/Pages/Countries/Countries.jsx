import React from 'react'
import Country from '../../Components/Country/Country'
import './countries.scss'
import useCountries from '../../hooks/useCountries'
function Countries({filter}) {
  const {countries} = useCountries()
  return (
    <div className='countries'>
      {
        filter.length > 0 ? filter.map((country, index) => (
          <Country country={country} key={index} />
        )) : 
        countries ? countries.map((country, index) => (
          <Country country={country} key={index} />
        )) : 'no data'
      }
    </div>
  )
}

export default Countries