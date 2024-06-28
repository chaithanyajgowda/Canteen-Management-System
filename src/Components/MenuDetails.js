import React from 'react';
import BreakFast from './BreakFast';
import Beverages from './Beverages'
import FastFood from './FastFood';
import Dessert from './Dessert';
import Salads from './Salads';
import Chats from './Chats';

const MenuDetails = ({ selectedMenu, onBack }) => {
  if (!selectedMenu) {
    return null;
  }

  const renderMenuDetails = () => {
    switch (selectedMenu) {
      case 'Breakfast':
        return <BreakFast/>;
      case 'Fast Food':
        return <FastFood/>;
      case 'Dessert':
        return <Dessert/>;
      case 'Beverages':
        return <Beverages/>;
      case 'Salads':
        return <Salads/>;
      case 'Chats':
        return <Chats/>;
      default:
        return null;
    }
  };

  return (
    <div className="menu-details">
      <button className="btn btn-primary" onClick={onBack}>Back to Menu</button>
      {renderMenuDetails()}
    </div>
  );
};

export default MenuDetails;
