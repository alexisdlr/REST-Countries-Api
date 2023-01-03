import { useEffect, useState } from "react"

export const useCountries = () => {
  const [countries, setCountries] = useState([])
  const url = 'https://restcountries.com/v2/alpha?codes=us,br,is,af,ax,al,dz,de'

  const getCountries = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setCountries(data))
  }

  useEffect(() => {
    getCountries()
  }, [])

  return {countries}
}
