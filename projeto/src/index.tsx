import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/pages/Home';
import ErrorPage from './components/pages/ErrorPage';
import { Login } from './components/pages/Login';
import { Dashboard } from './components/pages/Dashboard';
import { Register } from './components/pages/Register';
import {Root} from "./components/pages/Root"




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Home/>,
        errorElement: <ErrorPage />
      },
      {
        path: "/Login",
        element: <Login/>,
        errorElement: <ErrorPage />
      },
      {
        path: "/Dashboard/:user",
        element: <Dashboard />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Registrar",
        element: <Register />,
        errorElement: <ErrorPage />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
