import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    let [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("http://localhost:5001/api/Restaurants");
        const json = await data.json();
        setRestaurantList(json);
    }

    if (restaurantList.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    restaurantList = restaurantList.filter(
                        res => res.rating > 4.0
                    );
                    setRestaurantList(restaurantList);
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