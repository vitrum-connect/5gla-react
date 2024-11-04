import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.js";
import ImpressumPage from "./pages/Impressum.js";
import "./App.css";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header></Header>
        <Footer></Footer>
      </>
    ),
    children: [
      { index: true, element: <HomePage></HomePage> },
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
