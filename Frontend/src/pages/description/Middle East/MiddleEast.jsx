import React from 'react'
import './Middle.css';
import { useLocation } from 'react-router-dom';

const Dubai = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  const fees = searchParams.get('fees');
  const grade = searchParams.get('grade');

  return (
    <div className="africa-container">
      <h2 className="africa-title">Booking Details for MiddleEast</h2>
      <img className='booknowafrica' src="https://images.squarespace-cdn.com/content/v1/54930d4ae4b018401d7b66f4/07c58561-b433-423a-9338-5f6652bacc30/1.PNG"/>
      <div className="africa-details">
        <p>Destination: {destination}</p>
        <p>Fees: {fees}</p>
        <p>Grade: {grade}</p>
        <button class="paymentbtn">ADD PAYMENT</button>
      </div>
    </div>
  );
}

export default Dubai;