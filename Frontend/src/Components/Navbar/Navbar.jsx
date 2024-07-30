import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaRegWindowClose } from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContest';
import useLogout from '../../hooks/useLogout';
const Navbar = () => {
  const {loading,logout} = useLogout();
  const [active, setActive] = useState('navBar');
    const authuser = localStorage.getItem("mstor");
  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon"/>
              Travel.
            </h1>
          </Link>
        </div>
        
        <div className={active}>
          <ul className="navLists grid">
            <li className="navItem">
              <Link to="/" className="navLink">Home</Link>
            </li>
            
            <li className="navItem">
              <Link to="/about" className="navLink">About</Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">Contact</Link>
            </li>
            {!authuser && <li className="navItem">
            <Link to="/login" className="navLink">Login</Link>
            </li>}
            {!authuser && <li className="navItem">
              <button className="book-now-button">
                <Link to="/register">REGISTER</Link>
              </button>
              <div className="closeNavbar">
                <FaRegWindowClose className="icon" />
              </div>
            </li>}
            <li className="navItem">
            {authuser && <button onClick={logout}>Logout</button>}
            </li>
          </ul>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icons"/>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
