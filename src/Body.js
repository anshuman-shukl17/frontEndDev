import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resList, setRestaurantList] = useState(restaurantList);

  return (
    <div className="app-body">
      <button
        onClick={() => {
          const filteredListOfRes = resList.filter(
            (item) => item.info.avgRating > 4
          );
          setRestaurantList(filteredListOfRes);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restaurant-cards-list">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
