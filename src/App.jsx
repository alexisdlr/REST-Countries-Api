import { useContext } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { DarkModeContext } from "./Context/darkModeContext";
import Home from "./Pages/Home/Home";
import SingleCountry from "./Pages/SingleCountry/SingleCountry";
import './style.scss';

function App() {
  const { darkMode } = useContext(DarkModeContext);

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
