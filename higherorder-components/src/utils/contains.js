import ForgetPassword from "../Components/PrivateComponents/ForgetPassword";
import Login from "../Components/PrivateComponents/Login";
import Signup from "../Components/PrivateComponents/Signup";

export const PATH = {
//  privatePaths : [
//     {
//         pageName : "Dashboard",
//         path : "/Dashboard",
//         element : <Dashboard/>
//     },
//     {
//         pageName : "About-US",
//         path : "/Aboutus",
//         element: <AboutUs/>
//     },
//     {
//         pageName : "Contact-US",
//         path : "/Contactus",
//         element: <ContactUs/>
//     }
// ],
 publicPath : [
    {
        path : "/",
        element : Login,
    },
    {
        path : "/Signup",
        element : Signup,
    },
    {
        path : "/forgotpassword",
        element : ForgetPassword,   
    },
]

}

export const getToken =  () => {
    return localStorage.getItem('token');
}