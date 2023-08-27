import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1- Router configuration
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Planner from "./routes/Planner.jsx";
import Search from "./routes/Search.jsx";
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - Error page
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "planner",
        element: <Planner />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "old",
        element: <Navigate to="/search" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
