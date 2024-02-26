import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Header/Home";
import Certificate from "../components/certificates/Certificate";
import Login from "../components/login/Login";
import Resister from './../components/resister/Resister';
const Router = createBrowserRouter([
    {
        
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                loader: () => fetch("/books.json"),
                element: <Home></Home>
            },
            {
                path: 'services',
                element: <Certificate />
            },
            {
                path:'login',
                element: <Login />
            },
            {
                path:'register',
                element: <Resister />
            }
        ]
    }
    
])

export default Router;