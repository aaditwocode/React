const RestaurantCard = ({ resobj }) => {
  return (
    <div className="restaurant-card">
      <img src={resobj.imgUrl} alt={resobj.name} />
      <h2>{resobj.name}</h2>
      <p>{resobj.cuisine} Cuisine</p>
      <p>{resobj.rating} rating</p>
    </div>
  );
};


export default RestaurantCard;