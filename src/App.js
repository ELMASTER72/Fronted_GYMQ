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
import Marketplace from './components/Pages/Marketplace/Marketplace';
import Gyms_stock from './components/Pages/Gyms/Gyms_stock';
import Details from './components/Pages/Details/Details';
import Rutines from './components/Pages/Rutines/Rutines_stock'
import DetailsRutine from './components/Pages/DetailsRutine/DetailsRutine';
import { CartProvider } from './components/ui/Cart_store/Car_Store';
import { CardProvider } from './components/ui/Card_Gym/Card_Gym';
import { CardrutineProvider } from './components/ui/CardRutine/Card_Rutine';
import Us from './components/Pages/Us'
import UsUser from './components/Pages/UsUser';
import Success from './components/success/Success';




/** auth middleware */
import { AuthorizeUser, ProtectRoute, Authorizerol} from './middleware/auth'

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
        path : '/Store',
        element : <CartProvider><Marketplace/></CartProvider>
    },
    {
        path : '/Visual_Gym',
        element : <CardProvider><Gyms_stock/></CardProvider>
    },
    {
        path : '/Information/:name',
        element : <CardProvider><Details/></CardProvider>
    },
    {
        path : '/visual_Rutine',
        element : <CardrutineProvider><Rutines/></CardrutineProvider>
    },
    {
        path : '/detail/:name',
        element : <CardrutineProvider><DetailsRutine/></CardrutineProvider>
    },
    {
        path: '/Nosotros',
        element: <Us></Us>
    },
    {
        path: '/NosotrosUser',
        element: <UsUser></UsUser>
    },
    {
        path :'/success',
        element: <Success></Success>
    }
])

export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>
  )
}