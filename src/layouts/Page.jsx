import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

function Page() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto bg-page min-h-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Page