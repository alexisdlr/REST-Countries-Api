import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SingleCountry from "./Pages/SingleCountry/SingleCountry";
import './style.scss';
import { useThemeStore } from "./store/theme-store";
import { useCountriesStore } from "./store/countries-store";
import { useEffect } from "react";

function App() {
  const { darkMode } = useThemeStore();

  const  {fetchCountries} = useCountriesStore();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);
  

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark': 'light'}`}>
        <Navbar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/country/:name",
          element: (
              <SingleCountry />
          ),
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
