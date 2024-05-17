import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    let [restaurantList, setRestaurantList] = useState(restaurants);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurantList = restaurants.filter(
                        res => res.rating > 4.0
                    );
                    setRestaurantList(filteredRestaurantList);
                }}>Top Rated Restaurants</button>
            </div>

            <div className="restaurant-container">
                {
                    restaurantList.map((rest) => (
                        <RestaurantCard key={rest.id} restaurant={rest}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;