import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MyProjects from './components/projects/MyProjects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyProjects/>
      <Contact/>
      <Footer/>
      <Toaster position="top-bottom"
  reverseOrder={false}/>

    </div>
  )
}

export default App
