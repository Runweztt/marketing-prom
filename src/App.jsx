import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './Components/Layout/RootLayout';
import Feature from './Components/Pages/Feature';
import Register from './Components/Pages/Register';
import Home from './Components/Pages/Home';
import ErrorPage from './Components/ErrorPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}> 
        <Route index element={<Home />} />
        <Route path='Feature' element={<Feature />} />
        <Route path='Register' element={<Register />} />
      </Route>
    ),
    {
      basename: '/marketing-prom', 
    }
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
