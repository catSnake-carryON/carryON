import React, { useState } from 'react';
import PackingItem from './PackingItem';
import axios from 'axios';

const ListContainer = ({
  arrOfItems,
  loggedIn,
  username,
  name,
  destination,
  depDate,
  returnDate,
  setArrOfItems
}) => {
  const server = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  const handleSave = (e) => {
    e.preventDefault();
    const savedList = {
      tripName: name,
      destination: destination,
      startDate: depDate,
      endDate: returnDate,
      packingList: arrOfItems,
      username: username,
    };
    console.log('this is saved list', savedList);
    console.log('this is packing list', savedList.packingList);
    server
      .post('/saveList', savedList)
      .then((res) => {
        console.log('my response', res);
      })
      .catch((err) => {
        console.log(err);
      });
      setArrOfItems([]);
  };

  const redirectToLogin = (e) => {
    e.preventDefault();
    console.log('yay');
  };

  const itemsList = [];
  arrOfItems.forEach((item, i) => {
    itemsList.unshift(
      <PackingItem key={i} id={i} item={item.item} quantity={item.quantity} />
    );
  });

  return (
    <div>
      {itemsList}
      {itemsList.length > 0 && loggedIn === true ? (
        <button onClick={handleSave}>Save List</button>
      ) : (
        <button onClick={redirectToLogin}>Login to save!</button>
      )}
    </div>
  );
};

export default ListContainer;
