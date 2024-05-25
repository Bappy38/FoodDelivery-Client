import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [restaurantFilter, setRestaurantFilter] = useState({
        sortKey: 'Rating',
        searchText: searchText,
        selectTopRestaurant: false,
        cuisines: [],
        pageNo:1
    });
    const onlineStatus = useOnlineStatus();

    const restaurantList = useRestaurants(restaurantFilter);

    if (onlineStatus === false) {
        return <Offline/>
    }

    if (restaurantList.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}/>
                    <button className="search-btn" onClick={() => {
                        const updatedFilter = { ...restaurantFilter }
                        updatedFilter.searchText = searchText;
                        setRestaurantFilter(updatedFilter); 
                    }}>Search</button>
                </div>

                <button className="filter-btn" onChange={(e) => {
                    console.log(e);
                }} onClick={() => {
                    const updatedFilter = { ...restaurantFilter }
                    updatedFilter.selectTopRestaurant = (restaurantFilter.selectTopRestaurant === true)? false : true;
                    updatedFilter.searchText = searchText;
                    setRestaurantFilter(updatedFilter);
                }}>{restaurantFilter.selectTopRestaurant === false? 'Select Top Restaurants' : 'Select All Restaurants'}</button>
            </div>

            <div className="restaurant-container">
                {
                    restaurantList.map((rest) => (
                        <Link className="restaurant-navigator" to={"restaurants/" + rest.id} key={rest.id}>
                            <RestaurantCard restaurant={rest}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;