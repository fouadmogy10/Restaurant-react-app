import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollButton from '../components/scrollToTop/ScrollBtn'

const Layout = () => {
  return (
    <div className='d-flex flex-column  main'>
    <Header></Header>
    <main className='flex-grow'>
      <Outlet></Outlet>
    </main>
    <ScrollButton /> 
    <Footer></Footer>
  </div>
  )
}

export default Layout