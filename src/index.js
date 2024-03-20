import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './App.css';
import App from './App';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import Camping from './Pages/Camping';
import Campagne from './Pages/Campagne';
import Montagne from './Pages/Montagne';
import Mer from './Pages/Mer';
import Nature from './Pages/Nature';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "camping",
        element: <Camping />,
      },
      {
        path: "campagne",
        element: <Campagne />,
      },
      {
        path: "montagne",
        element: <Montagne />,
      },
      {
        path: "mer",
        element: <Mer />,
      },
      {
        path: "nature",
        element: <Nature />,
      },
    ],

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


