import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9876391&lng=77.63786189999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("This swiggy api data", json);
    const apiData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(apiData);
    setFilteredList(apiData);
  };

  if (resList.length < 1) {
    return <Shimmer></Shimmer>;
  }

  return (
    <div className="app-body">
      <div className="top-section">
        <button
          onClick={() => {
            const filteredListOfRes = resList.filter(
              (item) => item.info.avgRating > 4
            );
            setFilteredList(filteredListOfRes);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search-bar">
          <input
            className="search-box"
            placeholder="Enter search text here"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-button"
            onClick={() => {
              const filteredListOfRes = resList.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredListOfRes);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurant-cards-list">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
