import React from 'react'
import Navbar from './Components/pages/navbar/Navbar'
import Home from './Components/pages/home/Home'
import Services from './Components/pages/services/Services'
import About from './Components/pages/about/About'
import Track from './Components/pages/track/Track'
import Testimonials from './Components/pages/testimonials/Testimonials'
import Contact from './Components/pages/contact/Contact'
import Footer from './Components/pages/footer/Footer'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/track' element={<Track />}></Route>
        <Route path='/testimonials' element={<Testimonials />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App