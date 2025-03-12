import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
          alt="Food Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantData = [
  {
    id: 1,
    name: "Spicy Indian Delights",
    cuisine: "Indian",
    imgUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/3/4212e047-b31c-4448-bc23-c2330abeeb37_f81c1236-0b5f-4b60-b220-7722c3878f3c.jpg",
  },
  {
    id: 2,
    name: "Italian Pizzeria",
    cuisine: "Italian",
    imgUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/18/35139b49-285b-4b15-ae85-94c910ff612c_69cb0003-937e-49d0-a21a-5b46ec2dd500.jpg_compressed",
  },
  {
    id: 3,
    name: "Sushi Express",
    cuisine: "Japanese",
    imgUrl:
      "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1681387132/3f688fc3e480b588282c66e2f7aa7673.jpg",
  },
];

const RestaurantCard = ({ resobj }) => {
  return (
    <div className="restaurant-card">
      <img src={resobj.imgUrl} alt={resobj.name} />
      <h2>{resobj.name}</h2>
      <p>{resobj.cuisine} Cuisine</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..." />
      </div>
      <div className="restaurant-container">
        {
          restaurantData.map(restaurant => <RestaurantCard key={restaurant.id} resobj={restaurant} />)
        }


      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2025 Food Delivery. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Help</a>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
