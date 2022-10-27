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
      <h3>{item}</h3>
      <h3>{quantity}</h3>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handlePacked}>Packed!</button>
    </div>
  );
};

export default PackingItem;
