import React from 'react';

const MenuDetails = ({ selectedMenu, onBack }) => {
  if (!selectedMenu) {
    return null;
  }

  const renderMenuDetails = () => {
    switch (selectedMenu) {
      case 'Breakfast':
        return <div>Breakfast menu details...</div>;
      case 'Fast Food':
        return <div>Fast Food menu details...</div>;
      case 'Dessert':
        return <div>Dessert menu details...</div>;
      case 'Beverages':
        return <div>Beverages menu details...</div>;
      case 'Salads':
        return <div>Salads menu details...</div>;
      case 'Chats':
        return <div>Chats menu details...</div>;
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
