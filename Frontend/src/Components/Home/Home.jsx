import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import travel2 from '../../Assets/travel2.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaTripadvisor } from 'react-icons/fa';
import { FaListUl } from 'react-icons/fa';
import { TbApps } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Main from '../Main/Main';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const locationRef = useRef('');
  const dateRef = useRef('');
  const priceRef = useRef(0);

  // State to track maximum price
  const [maxPrice, setMaxPrice] = useState(5000);

  // State to hold search criteria
  const [searchCriteria, setSearchCriteria] = useState('');

  // Handle search button click
  const searchHandler = () => {
    const location = locationRef.current.value;
    const date = dateRef.current.value;
    const price = priceRef.current.value;

    if (location === '' || date === '' || price === '') {
      return alert('All fields are Required');
    }

    // Set the search criteria to the destination name
    setSearchCriteria(location);
  };

  // Update maximum price
  const handlePriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value);
    setMaxPrice(newMaxPrice);
  };

  return (
    <>
      <section className="home">
        <div className="overlay"></div>
        <video className="travel2" src={travel2} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">
              Our Packages
            </span>
            <h1 data-aos="fade-up" className="homeTitle">
              Search your Holiday
            </h1>
          </div>
          <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search your destination</label>
              <div className="input flex">
                <input type="text" placeholder="Enter your name here" ref={locationRef} />
                <GrLocation className="icon" />
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor="date">Search your date</label>
              <div className="input flex">
                <input type="date" ref={dateRef} />
              </div>
            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max price:</label>
                <h3 className="total">${maxPrice}</h3>
              </div>
              <div className="input flux">
                <input type="range" max="5000" min="1000" onChange={handlePriceChange} ref={priceRef} />
              </div>
            </div>
            <div className="searchOptions flex">
              <HiFilter className="icon" />
              <div>
                <span onClick={searchHandler}>SEARCH</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
            <div className="leftIcons">
              <FaListUl className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      </section>
      <Main searchCriteria={searchCriteria} />
    </>
  );
};

export default Home;
