import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/index';
import Speech from './pages/speech';
import Admin from './pages/admin';
import Traditions from './pages/traditions';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import { Analytics } from '@vercel/analytics/react';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: `/speech/:author`,
    element: <Speech />,
  },
  {
    path: `/admin`,
    element: <Admin />,
  },
  {
    path: `/traditions`,
    element: <Traditions />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <Analytics />
  </React.StrictMode>
);
