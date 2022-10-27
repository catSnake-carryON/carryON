import React, { useState } from 'react';

const AddItemForm = ({
  itemInput,
  setItemInput,
  arrOfItems,
  setArrOfItems,
  itemQuantity,
  setItemQuantity,
}) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    setItemInput(e.target.value);
    
  };

  const quantityOnChange = (e) => {
    e.preventDefault();
    setItemQuantity(e.target.value);
    console.log(itemInput);
  };

  const addItem = (e) => {
    e.preventDefault();
    setArrOfItems([...arrOfItems, { item: itemInput, quantity: itemQuantity }]);
    //clear our add item form
    setItemInput('');
    setItemQuantity(1);
  };

  // add an option add quantity to item
  return (
    <div>
      <h1>Add Item Form</h1>
      <form>
        <input
          value={itemInput}
          type='text'
          placeholder='Add item here!'
          onChange={handleOnChange}
        />
        <input
          value={itemQuantity}
          type='number'
          placeholder='quantity'
          onChange={quantityOnChange}
        />
        <button onClick={addItem}>Add Item To List!</button>
      </form>
    </div>
  );
};

export default AddItemForm;
