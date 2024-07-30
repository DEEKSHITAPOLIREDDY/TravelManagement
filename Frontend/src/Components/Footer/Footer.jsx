import React,{useEffect} from 'react'
import './footer.css';
import {IoIosSend} from 'react-icons/io'
import travel1 from '../../Assets/travel1.mp4'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
//lets create a react hook to add a scroll animation...
useEffect(()=>{
  Aos.init({duration:2000})
},[])






  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={travel1} loop autoPlay muted type="travel1/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2 className="msg">Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address"/>
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <IoIosSend className="icon" />


            </button>


          </div>

        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
              <MdOutlineTravelExplore className="icon" />
              </a>
            </div>
            <div className="footerParagragh">
              Lorem ipsum dolor sit amet, consecutur adipisicing elit. Ullam inventore eos
              fuga hdjkhfksnmcz sgfwuirheklf kauopswqikr'ewq 
            </div>
            <div className="footerSocials">
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            </div>

          </div>
          <div className="footerLinks grid">
            {/* Group One */}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerLink flex">
              <FiChevronRight className="icon"/>
              Services
             </li>
             <li className="footerLink flex">
              <FiChevronRight className="icon"/>
              Incurence
             </li>
             <li className="footerLink flex">
              <FiChevronRight className="icon"/>
              Agency
             </li>
             <li className="footerLink flex">
              <FiChevronRight className="icon"/>
              Tourism
             </li>
             <li className="footerLink flex">
              <FiChevronRight className="icon"/>
              Payments
             </li>
            </div>

          </div>

        </div>

      </div>
      
      
    </section>
  )
}

export default Footer;