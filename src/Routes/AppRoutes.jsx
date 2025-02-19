import React from 'react'
import { Routes } from 'react-router-dom'
import ScrollToTop from '../Utils/ScrollToTop'
import Home from '../pages/Home/Home'

const AppRoutes = () => {
  return (
    <div>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/esn/Accueil" element={<Home />} /> */}
        {/* <Route path="/esn/carriere" element={<Career />} /> */}
        {/* <Route path="/esn/carriere/:id" element={<CareerDetail />} /> */}
        {/* <Route path="/esn/Actualités" element={<Blog />} /> */}
        {/* <Route path="/esn/Actualités/:id" element={<BlogDetail />} /> */}
        {/* <Route path="/esn/Expertise" element={<Expertise />} /> */}
        {/* <Route path="/esn/Contact" element={<Contact />} /> */}
        {/* <Route path="/politiquedeconfidentialite" element={<Policy />} /> */}
        {/* <Route path="/Mentionslegales" element={<Mention />} /> */}
        {/* <Route path="/politiquedecookies" element={<Cookies />} /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default AppRoutes