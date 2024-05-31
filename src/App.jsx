 
 
import './App.css'
import About from './components/About/About'
import Advantages from './components/Advantages/Advantages'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import Team from './components/Team/Team'

function App() {
 

  return (
    <>
     <Navbar/>
     <Main/>
     {/* <About/> */}
     <Advantages/>
     <Team/>
    </>
  )
}

export default App
