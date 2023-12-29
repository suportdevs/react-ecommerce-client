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
import Cart from './pages/Cart/Cart';
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './services/store';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Admin/Dashboard';
import Layout from './pages/Admin/Layouts/Layout';
import AdminProductList from './pages/Admin/AdminProductList';
import AdminProduct from './pages/Admin/AdminProduct';
import NewProduct from './pages/Admin/NewProduct';

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
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/payment-success',
    element: <PaymentSuccess />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/admin/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/admin/products',
        element: <AdminProductList />,
      },
      {
        path: '/admin/products/create',
        element: <NewProduct />,
      },
      {
        path: '/admin/products/edit/:id',
        element: <AdminProduct />,
      },
    ]
  }
]);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
    <Toaster />
  </Provider>
);

reportWebVitals();
