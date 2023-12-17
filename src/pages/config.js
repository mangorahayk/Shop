import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import MainLayout from "../layouts/MainLayout";
import Basket from "./Basket";
import Home from "./Home";
import Rating from "./Home/Rating";
import Liked from "./Liked";
import LogIn from "./LogIn";
import Register from "./Register";
import Sales from "./Sales";
import User from "./User";



const config = [
    {
        path: '/',
        element: <Home />,
        Layout: AuthLayout
    },

    {
        path: '/login',
        element: <LogIn />,
        Layout: DefaultLayout
    },

    {
        path: '/register',
        element: <Register />,
        Layout: DefaultLayout
    },

    {
        path: '/sales',
        element: <Sales />,
        Layout: AuthLayout
    },
    {
        path:'/liked',
        element:<Liked />,
        Layout: AuthLayout
    },
    {
        path:"/rating",
        element:<Rating />,
        Layout: AuthLayout
    },
    {
        path:'/user',
        element:<User />,
        Layout:AuthLayout
    },
    {
        path:"/basket",
        element:<Basket />,
        Layout:AuthLayout
    },
    
]

export default config