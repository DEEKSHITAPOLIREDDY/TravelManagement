import React from 'react';
import './Africa.css';
import { useLocation } from 'react-router-dom';


const Africa = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  const fees = searchParams.get('fees');
  const grade = searchParams.get('grade');

  return (
    <div className="africa-container">
      <h2 className="africa-title">Booking Details for Africa</h2>
      <img className='booknowafrica' src="https://i.pinimg.com/564x/69/68/46/696846d80d89342c923440a7770f3d07.jpg"/>
      <div className="africa-details">
        
        <p>Destination: {destination}</p>
        <p>Fees: {fees}</p>
        <p>Grade: {grade}</p>
        <button class="paymentbtn">ADD PAYMENT</button>
      </div>
      
    </div>
  );
};

export default Africa;
