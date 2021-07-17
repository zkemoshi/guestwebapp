import React from 'react';

const RoomItem = ({ room }) => {
  return (
    <div className='round-img bg-light text-center'>{room.roomNumber}</div>
  );
};

export default RoomItem;
