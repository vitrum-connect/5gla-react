import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.js';
import ImpressumPage from './pages/Impressum.js';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>
  },
  {
    path: '/impressum',
    element: <ImpressumPage></ImpressumPage>
  }

]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
    
  );
}

export default App;
