    import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'
    
    export default function MainLayout() {
      return (
   <>
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
      )
    }
    