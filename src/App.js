import React, { Fragment, useState } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Informatic from './components/Informatic';
import Rooms from './components/rooms/Rooms';
import Booking from './components/Booking';

function App() {
  const [guests, setGuests] = useState(0);
  const [total, setTotal] = useState(0);
  const [rooms, setRooms] = useState([
    { id: 1, roomNumber: 1, roomName: 'Giraffe', amount: 25000 },
    { id: 2, roomNumber: 2, roomName: 'Lion', amount: 35000 },
    { id: 3, roomNumber: 3, roomName: 'Elephant', amount: 55000 },
    { id: 4, roomNumber: 4, roomName: 'Gazzel', amount: 15000 },
    { id: 5, roomNumber: 5, roomName: 'Tiger', amount: 25000 },
    { id: 6, roomNumber: 6, roomName: 'Cheatah', amount: 20000 },
    { id: 7, roomNumber: 7, roomName: 'Pantelo', amount: 20000 },
    { id: 8, roomNumber: 8, roomName: 'Dog', amount: 30000 },
    { id: 9, roomNumber: 9, roomName: 'Hyena', amount: 40000 },
    { id: 10, roomNumber: 10, roomName: 'Hen', amount: 20000 },
  ]);
  return (
    <div className='App'>
      <Navbar />
      <Informatic />
      <div className='container'>
        <Rooms rooms={rooms} />
        <Booking />
      </div>
    </div>
  );
}

export default App;
