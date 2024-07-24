import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import Sites for routing
import App from './App.tsx';
import Home from './pages/Home.tsx';
import ErrorPage from "./pages/error-page.tsx";
import Contact from './pages/Contact.tsx'
import Test from './pages/Test.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
