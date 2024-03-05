import { React, useState } from 'react'
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Service } from "./routes/Service"
import { Contact } from "./routes/Contact"
import { Gallery } from './routes/Gallery'
import { Routes, Route } from 'react-router-dom'



import './App.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'


function App() {


  return (
    <>

      {/* */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
