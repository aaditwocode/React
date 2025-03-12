import React, { useState } from 'react';
import RestaurantCard from './RestrauntCard';
import restaurantData from '../utils/mockdata';

const Body = () => {
  const [filteredData, setFilteredData] = useState(restaurantData); 

  const handleFilterClick = () => {
    const filteredRestaurants = restaurantData.filter(restaurant => restaurant.rating > 4);
    setFilteredData(filteredRestaurants);
  };

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..." />
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterClick}>
          Filter to see top restaurants near you;
        </button>
      </div>
      <div className="restaurant-container">
        {filteredData.map(restaurant => (
          <RestaurantCard key={restaurant.id} resobj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
