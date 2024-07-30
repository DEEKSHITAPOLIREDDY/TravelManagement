import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Contact from './pages/Contact/Contact'; // Import the ContactPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Europe from './pages/description/Europe/Europe';
import Asia from './pages/description/Asia/Asia';

import MiddleEast from './pages/description/Middle East/MiddleEast';



import Australia from './pages/description/Australia/Australia';
import NorthAmerica from './pages/description/North America/NorthAmerica';
import Africa from './pages/description/Africa/Africa';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/description/Europe" element={<Europe/>}/>
          <Route path="/description/Asia" element={<Asia/>}/>
          <Route path="/login" element={<Login />}/>
          
          <Route path="/register" element={<Register />}/>
          
         
         
          <Route path="/description/North America" element={<NorthAmerica/>}/>
          <Route path="/description/Africa" element={<Africa/>}/>
          <Route path="/description/Middle East" element={<MiddleEast/>}/>

          
         
          
          <Route path="/description/Australia" element={<Australia/>}/>
          
          

         

        </Routes>
      
        <Footer />
      </div>
      <Toaster />
    </Router>
   
  );
}

export default App;
