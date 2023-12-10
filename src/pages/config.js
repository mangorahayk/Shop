import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "./Home";
import LogIn from "./LogIn";
import Register from "./Register";
import Sales from "./Sales";



const config = [
    {
        path: '/',
        element: <Home />,
        Layout: AuthLayout
    },

    {
        path: '/login',
        element: <LogIn />,
        Layout: AuthLayout
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
    }
]

export default config