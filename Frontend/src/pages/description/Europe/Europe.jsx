import React from 'react'
import './Europe.css';
import { useLocation } from 'react-router-dom';

const Europe = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  const fees = searchParams.get('fees');
  const grade = searchParams.get('grade');

  return (
    <div className="africa-container">
      <h2 className="africa-title">Booking Details for Europe</h2>
      <img className='booknowafrica' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/485124941.jpg?k=030b5992dafb292ac0f1a28dcbe01a50ce6f7bdfe7abea7707bf32c63ad2e7a5&o=&hp=1"/>
      <div className="africa-details">
        <p>Destination: {destination}</p>
        <p>Fees: {fees}</p>
        <p>Grade: {grade}</p>
        <button class="paymentbtn">ADD PAYMENT</button>
      </div>
    </div>
  );
}

export default Europe;