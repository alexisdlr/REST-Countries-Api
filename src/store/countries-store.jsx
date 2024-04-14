import { create } from "zustand";
import { makeRequest } from "../axios";

export const useCountriesStore = create((set) => ({
  countries: [],
  fetchCountries: async () => {
    try {
      set({ loading: true })
      const {data} = await makeRequest.get('/all')
      set({ countries: data })
    } catch (error) {
      console.log(error)
    }
    finally {
      set({ loading: false })
    }
  },
  loading: false,
  setLoading: (loading) => set({ loading }),
}));