import { create } from "zustand";
import { makeRequest } from "../axios";

export const useCountriesStore = create((set) => ({
  countries: [],
  fetchCountries: async () => {
    try {
      const {data} = await makeRequest.get('/all')
      console.log(data)
      set({ countries: data })
    } catch (error) {
      console.log(error)
    }
  },
  loading: false,
  setLoading: (loading) => set({ loading }),
}));