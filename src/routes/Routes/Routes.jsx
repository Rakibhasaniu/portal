import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../../layout/DashbordLayout";
import Main from "../../layout/Main";
import MyAppointment from "../../MyAppointment/MyAppointment";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Dashbord from "../../pages/Dashbord/Dashbord/Dashbord";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            
        ]
    },
    {
        path: '/dashbord',
        element: <PrivateRoute><DashbordLayout></DashbordLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashbord',
                element: <MyAppointment></MyAppointment>
            },
            {

            }
        ]
        
    }
])