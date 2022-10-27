import React, { useState } from 'react';
import PackingItem from './PackingItem';

const ListContainer = ({ arrOfItems, loggedIn }) => {
  const itemsList = [];
  arrOfItems.forEach((item, i) => {
    itemsList.unshift(
      <PackingItem key={i} id={i} item={item.item} quantity={item.quantity} />
    );
  });

  const handleSave = (e) => {
    e.preventDefault();
    //if currUser is logged in: send post
    //save lists on MyTrips page
  };

  return (
    <div>
      {/* {itemsList.length > 0 ? { itemsList } : null}
      {itemsList.length > 0 ? (
        <button onClick={handleSave}>Save List</button>
      ) : null} */}
      {itemsList}
    </div>
  );
};

export default ListContainer;
