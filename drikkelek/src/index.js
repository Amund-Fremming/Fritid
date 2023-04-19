import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import {
      createBrowserRouter,
      RouterProvider,
    } from "react-router-dom";
import Host from "./pages/Host";
import Join from "./pages/Join";
import Howto from "./pages/Howto";
import Premade from './pages/Premade';
import PlayPremade from './Components/PlayPremade';
import PlayGame from './pages/PlayGame';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "host",
    element: <Host />
  },
  {
    path: "join",
    element: <Join />
  },
  {
    path: "howto",
    element: <Howto />
  },
  {
    path: "/premade",
    element: <Premade />
  },
  {
    path: "/playpremade",
    element: <PlayPremade />
  },
  {
    path: "/playgame",
    element: <PlayGame />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
