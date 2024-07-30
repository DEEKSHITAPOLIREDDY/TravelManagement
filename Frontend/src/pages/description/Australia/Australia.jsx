import React from 'react';
import './Australia.css';
import { useLocation } from 'react-router-dom';


const Australia = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  const fees = searchParams.get('fees');
  const grade = searchParams.get('grade');

  return (
    <div className="africa-container">
      <h2 className="africa-title">Booking Details for Australia</h2>
      <img className='booknowafrica' src="https://img.jakpost.net/c/2016/04/12/2016_04_12_2890_1460436680._large.jpg"/>
      <div className="africa-details">
        
        <p>Destination: {destination}</p>
        <p>Fees: {fees}</p>
        <p>Grade: {grade}</p>
        <button class="paymentbtn">ADD PAYMENT</button>
      </div>
      
    </div>
  );
};

export default Australia;
