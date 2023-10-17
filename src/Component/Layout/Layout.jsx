import React from 'react'
import Header from '../../Pages/Navbar/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Pages/footer/Footer'
const Layout = () => {
  return (
    <>   
    <div>
    <Header/> 
        <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default Layout