import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Home from './components/Pages/Home';
import HomeUser from './components/Pages/HomeUser';
<<<<<<< HEAD
import Marketplace from './components/Pages/Marketplace/Marketplace';
import Gyms_stock from './components/Pages/Gyms/Gyms_stock';
import { CartProvider } from './components/ui/Cart_store/Car_Store';
import { CardProvider } from './components/ui/Card_Gym/Card_Gym';

=======
import Us from './components/Pages/Us'
import Service from './components/Pages/Service'
>>>>>>> dc6689235dd17f3122f0501e6e2aac8b472bab9e


/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'

/** root routes */
const router = createBrowserRouter([
    {
        path : '/Login',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '/password',
        element : <ProtectRoute><Password /></ProtectRoute>
    },
    {
        path : '/profile',
        element : <AuthorizeUser><Profile /></AuthorizeUser>
    },
    {
        path : '/recovery',
        element : <Recovery></Recovery>
    },
    {
        path : '/reset',
        element : <Reset></Reset>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
    {
        path : '/',
        element : <Home></Home>
    },
    {
        path : '/Home',
        element : <HomeUser></HomeUser>
    },
    {
<<<<<<< HEAD
        path : '/Store',
        element : <CartProvider><Marketplace/></CartProvider>
    },
    {
        path : '/Visual_Gym',
        element : <CardProvider><Gyms_stock/></CardProvider>
=======
        path : '/Nosotros',
        element: <Us></Us>
    },
    {
        path : '/Servicios',
        element : <Service></Service>
>>>>>>> dc6689235dd17f3122f0501e6e2aac8b472bab9e
    }
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}