import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
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

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    const restaurantList = useRestaurants(restaurantFilter);

    if (onlineStatus === false) {
        return <Offline/>
    }

    if (restaurantList.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="px-6">
            <div className="flex">
                <div className="m-2">
                    <input
                        type="text"
                        value={searchText}
                        className="border border-solid border-black p-2 rounded-md w-[250px]"
                        placeholder="Search for restaurants and food"
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}/>
                    <button
                        className="m-2 p-2 rounded-md font-medium bg-blue-200"
                        onClick={() => {
                        const updatedFilter = { ...restaurantFilter }
                        updatedFilter.searchText = searchText;
                        setRestaurantFilter(updatedFilter); 
                    }}>Search</button>
                </div>

                <div className="m-2">
                    <button
                        className="m-2 p-2 rounded-md font-medium bg-gray-200"
                        onChange={(e) => {
                        console.log(e);
                    }} onClick={() => {
                        const updatedFilter = { ...restaurantFilter }
                        updatedFilter.selectTopRestaurant = (restaurantFilter.selectTopRestaurant === true)? false : true;
                        updatedFilter.searchText = searchText;
                        setRestaurantFilter(updatedFilter);
                    }}>{restaurantFilter.selectTopRestaurant === false? 'Select Top Restaurants' : 'Select All Restaurants'}</button>
                </div>
            </div>

            <div className="flex flex-wrap">
                {
                    restaurantList.map((rest) => (
                        <Link to={"restaurants/" + rest.id} key={rest.id}>
                            {
                                rest.isPromoted
                                ?
                                <PromotedRestaurantCard restaurant={rest}/>
                                :
                                <RestaurantCard restaurant={rest}/>
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;