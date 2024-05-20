import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurantFilter, setRestaurantFilter] = useState({
        sortKey: 'Rating',
        searchText: '',
        selectTopRestaurant: false,
        cuisines: [],
        pageNo:1
    });

    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (latestRestaurantFilter) => {
        setRestaurantList([]);
        const response = await fetch("http://localhost:5001/api/Restaurants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(latestRestaurantFilter ?? restaurantFilter)
        });
        const json = await response.json();
        setRestaurantList(json);
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
                        value={restaurantFilter.searchText}
                        onChange={(e) => {
                            const updatedFilter = { ...restaurantFilter }
                            updatedFilter.searchText = e.target.value;
                            setRestaurantFilter(updatedFilter);
                        }}/>
                    <button className="search-btn" onClick={() => {
                        fetchData();    
                    }}>Search</button>
                </div>

                <button className="filter-btn" onChange={(e) => {
                    console.log(e);
                }} onClick={() => {
                    const updatedFilter = { ...restaurantFilter }
                    updatedFilter.selectTopRestaurant = (restaurantFilter.selectTopRestaurant === true)? false : true;
                    setRestaurantFilter(updatedFilter);
                    fetchData(updatedFilter);
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