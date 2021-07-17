import React from 'react';
import RoomItem from './RoomItem';

const Rooms = ({ rooms }) => {
  return (
    <div className='card userStyle'>
      {rooms.map((room) => (
        <RoomItem key={room.id} room={room} />
      ))}
    </div>
  );
};

export default Rooms;
