import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/pages/Home';
import ErrorPage from './components/layout/ErrorPage';
import { Login } from './components/pages/Login';
import { Dashboard } from './components/pages/Dashboard';
import { Register } from './components/pages/Register';
import { Root } from "./components/pages/Root"
import { ProtectedRoute } from './components/utils/ProtectedRoute';
import { Sobre } from './components/pages/About';
import { UserPage } from './components/pages/UserPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        index: true
      },
      {
        path: "/Login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/Dashboard/:user",
            element: <Dashboard />,
            errorElement: <ErrorPage />
          },
          {
            path: "/User/:user",
            element: <UserPage />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: "/Registrar",
        element: <Register />,
        errorElement: <ErrorPage />
      },
      {
        path: "/Sobre",
        element: <Sobre/>,
        errorElement: <ErrorPage />
      }
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
