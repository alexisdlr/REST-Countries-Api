import { useEffect, useState } from "react"

export const useCountries = () => {
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

  return {countries}
}
