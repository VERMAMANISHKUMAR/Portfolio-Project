//import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonial from './Components/Testimonial/Testimonial';
import Email from './Components/Email&Contact/Email';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';



function App() {
const theme =useContext(themeContext )
const darkMode=theme.state.darkMode;
  
  return (
    
    
    <div className='App'  style={{background: darkMode? 'black': " ", color:darkMode? 'white':''}}>
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience/>
    <Works/>
    <Portfolio/>
    <Testimonial/>
    <Email/>
    <Footer/>
    </div>
  );
}

export default App;
