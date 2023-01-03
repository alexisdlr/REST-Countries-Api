import React from 'react'
import Country from '../../Components/Country/Country'
import {useCountries} from '../../hooks/useCountries'
import './countries.scss'
function Countries({filter}) {
  console.log(filter)
  const {countries} = useCountries()

  
  return (
    <div className='countries'>
      {
        
        filter.length > 0 ? filter.map((c, i) => (
          <Country country={c} key={i} />
        )) :
        countries ? countries.map((country, index) => (
          <Country country={country} key={index} />
        )) : 'no data'
      }
    </div>
  )
}

export default Countries