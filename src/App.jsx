import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useThemeStore } from "./store/theme-store";
import { useCountriesStore } from "./store/countries-store";
import CountryDetails from "./Pages/country-detail/country-detail";

import "./style.scss";
import "./app.scss";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  const { darkMode } = useThemeStore();

  const { fetchCountries } = useCountriesStore();

  useEffect(() => {
    fetchCountries();
  }, []);

  const Layout = () => {
    return (
      <div
        className={`theme-${darkMode ? "dark" : "light"}`}
        style={{ height: "100%" }}
      >
        <div className="container-all">
          <Navbar />
          <Outlet />
        </div>
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
          element: <CountryDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
