import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// 1 - Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import AliExpress from './routes/AliExpress';
import Amazon from './routes/Amazon';
import { FetchProvider } from './contexts/FetchContext';
import Nike from './routes/Nike';
import Adidas from './routes/Adidas';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "aliexpress",
    element: <AliExpress />
  },
  {
    path: "amazon",
    element: <Amazon />
  },
  {
    path: "nike",
    element: <Nike />
  }
  ,
  {
    path: "adidas",
    element: <Adidas />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FetchProvider>
    <RouterProvider router={router}/>
    </FetchProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
