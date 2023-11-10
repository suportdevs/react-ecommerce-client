import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products/:category',
    element: <ProductList />,
  },
  {
    path: '/product/:id',
    element: <Product />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  }
]);

root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
