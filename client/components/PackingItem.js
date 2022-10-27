import React, { useState } from 'react';

const PackingItem = ({ item, quantity }) => {
  const handleDelete = (e) => {
    e.preventDefault();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };

  const handlePacked = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* <h1>Packing Item</h1> */}
      <p>{item}</p>
      <p>{quantity}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handlePacked}>Packed!</button>
    </div>
  );
};

export default PackingItem;
