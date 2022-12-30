import React from 'react'
import './country.scss'
function Country({country}) {
  return (
    <div className='country'>
      <img src={country.flags.png} alt='country' />
      <div className='info'>
        <h3>{country.name.common}</h3>

        <p><span>Population:</span> {country.population}</p>
        <p><span>Region:</span> {country.region}</p>
        <p><span>Capital:</span> {country.capital}</p>

      </div>
    </div>
  )
}

export default Country