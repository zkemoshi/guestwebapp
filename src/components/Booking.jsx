import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    <div className='card'>
      <h3>Room Booked</h3>
      <p>Room: 4</p>
      <p>Price: 35,000</p>
      <Link to='' className='btn btn-success'>
        Accept
      </Link>
      <Link to='' className='btn btn-danger'>
        Cancel
      </Link>
    </div>
  );
};

export default Booking;
