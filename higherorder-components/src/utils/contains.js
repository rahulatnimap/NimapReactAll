import React from "react";
import ForgetPassword from "../Components/PrivateComponents/ForgetPassword";
import Login from "../Components/PrivateComponents/Login";
import Signup from "../Components/PrivateComponents/Signup";
// import AboutUs from "../Components/pages/AboutUs";
// import ContactUs from "../Components/pages/ContactUs";
// import Dashboard from "../Components/pages/Dashboard";
// import UserDetails from "../Components/pages/UserDetails";

const AboutUs = React.lazy(()=> import("../Components/pages/AboutUs"))
const ContactUs = React.lazy(()=> import("../Components/pages/ContactUs"))
const UserDetails = React.lazy(()=> import("../Components/pages/UserDetails"))
const Dashboard = React.lazy(()=> import("../Components/pages/Dashboard"))

export const PATH = {
    privatePaths: [
        {
            path: "/",
            pageName: "Dashboard",
            element: Dashboard
        },
        {
            path: "/CreateNewUser",
            pageName: "CreateNewUser",
            element: AboutUs
        },
        {
            path: "/Contact",
            pageName: "Contact",
            element: ContactUs
        },
        {
            path: "/UserDetailPage",
            pageName: "UserDetailPage",
            element: UserDetails
        }
    ],
    publicPath: [
        {
            path: "/Login",
            element: Login,
        },
        {
            path: "/Signup",
            element: Signup,
        },
        {
            path: "/forgotpassword",
            element: ForgetPassword,
        },
    ]

}

export const CustomToken = "2sdijsdnk489702jsdijnjisd93409dfsjidis"

export const getToken = () => {
    return localStorage.getItem('token');
}