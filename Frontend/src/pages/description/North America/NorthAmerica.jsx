import React from 'react'
import './North.css';
import { useLocation } from 'react-router-dom';

const NorthAmerica = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  const fees = searchParams.get('fees');
  const grade = searchParams.get('grade');

  return (
    <div className="africa-container">
      <h2 className="africa-title">Booking Details for North America</h2>
      <img className='booknowafrica' src="https://i.pinimg.com/736x/2c/f6/7b/2cf67b305f1e420d5a748802f2c05d02.jpg"/>
      <div className="africa-details">
        <p>Destination: {destination}</p>
        <p>Fees: {fees}</p>
        <p>Grade: {grade}</p>
        <button class="paymentbtn">ADD PAYMENT</button>
      </div>
    </div>
  );
}

export default NorthAmerica