import React, { useEffect } from 'react'
import Home from './pages/Home'
import OurCompany from './pages/OurCompany'
import Services from './pages/Services'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Policies from './pages/Policies'
const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/our-company' element={<OurCompany/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policies' element={<Policies/>}/>
      </Routes>
    </Router>
  )
}

export default App