import React from 'react'
import './Asia.css';
import { useLocation } from 'react-router-dom';


const Asia = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const destination = searchParams.get('destination');
  const fees = searchParams.get('fees');
  const grade = searchParams.get('grade');

  return (
    <div className="africa-container">
      <h2 className="africa-title">Booking Details for Asia</h2>
      <img className='booknowafrica' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/7c/b2/46/hotel-asia-jammu-tawi.jpg?w=700&h=-1&s=1"/>
      <div className="africa-details">
        <p>Destination: {destination}</p>
        <p>Fees: {fees}</p>
        <p>Grade: {grade}</p>
        <button class="paymentbtn">ADD PAYMENT</button>
      </div>
    </div>
  );
}

export default Asia;