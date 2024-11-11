import React from "react";
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from "react-router-dom";
import HomePage from "./Pages/Home.js";
import ImpressumPage from "./Pages/Impressum.js";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </>
    ),
    children: [
      {index:true, element:<Navigate to="/home" />},
      { path: "home", element: <HomePage></HomePage> },
      { path: "/impressum", element: <ImpressumPage></ImpressumPage> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;