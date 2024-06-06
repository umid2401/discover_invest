 import './App.css'
 import {Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import Projects from './pages/ProjectsPage'
import CareerPage from './pages/CareerPage'
import News from './pages/News'
import ContactPage from './pages/ContactPage'
import { ToastContainer } from 'react-toastify';

function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/career' element={<CareerPage/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path="/contacts" element={ <ContactPage/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
