import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import ContactForm from './Components/ContactForm/ContactForm'
import NewsA2K from './Components/News/News'
import Story from './Components/Story/Story'
import Services from './Components/Services/Services'
import KeyServices from './Components/KeyServices/KeyServices'
import Learn from './Components/LearnWIthUs/Learn'
import OurStory from './Components/OurStory/OurStory'

const App = () => {
  return (
    <>
      {/*
          <Navbar />
          <Home />
          <Services />
          <About/>
          <Story />
          <NewsA2K />
          <ContactForm/>
          <Footer />

          <OurStory/>
      */}


      <Learn/>
      <KeyServices/>
      
          
      </>
  )
}

export default App