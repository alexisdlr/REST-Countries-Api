import { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useThemeStore } from "./store/theme-store";
import { useCountriesStore } from "./store/countries-store";
import { Navbar } from "@components";
import CountryDetails from "@pages/country-detail/country-detail";
import Home from "@pages/home/home";

import "./style.scss";
import "./app.scss";

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
