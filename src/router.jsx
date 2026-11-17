import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";


import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home.jsx";
import SendCode from "./pages/SendCode/SendCode.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import CartItems from "./pages/Cart/CartItems.jsx";





const router=createBrowserRouter([
    {
path:'/',
element:<MainLayout/>,
children:[
    {
        index:true,
        element:
       

            <Home/>
      
    }
   ,{
path:'/cart',
element:<CartItems/>
   },
     {
        path:'products/:id',
        element:<ProductDetails/>
    }
]
    },
    {
element:<AuthLayout/>,
children:[
    {
        path:'/login',element:<Login/>
    },
    {
        path:'/register',element:<Register/>
    }
    ,
    {
        path:'/sendcode',element:<SendCode/>
    }
    ,
    {
        path:'/resetpassword',element:<ResetPassword/>
    }

]



    }
])
export default router;