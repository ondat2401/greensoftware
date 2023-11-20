import './App.css';
import React from 'react';
import Header from './Header.js'
import { FaGithub,FaTelegram,FaLinkedin } from 'react-icons/fa';
function Footer() {
  return (
    <footer>
      <span>&#169; 2023GreenSoftware.Allrights reserved.</span>
      <span className='footer-icons' style={{color:"#100493"}}> <FaLinkedin /></span>
      <span className='footer-icons' style={{color:"#007bff"}}> <FaTelegram /></span>
      <span className='footer-icons' style={{color:"black"}}> <FaGithub /></span>
    </footer>
  );
}
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
