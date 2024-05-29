import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import FoodCategory from "./FoodCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {restaurantId} = useParams();
    const resInfo = useRestaurantMenu(restaurantId);

    const [expandedCategoryId, setExpandedCategoryId] = useState(0);

    if (resInfo === null){
        return (<Shimmer/>);
    }

    return (
        <div className="text-center mt-6">
            <h1 className="font-bold text-2xl">{resInfo.name}</h1>
            <h1 className="font-bold">{resInfo.rating}/5 ⭐</h1>
            <h1 className="font-bold">🕒 {resInfo.deliveryTimeInMinutes} minutes</h1>

            <div>
                {resInfo.menu.categories.map((category, index) => (
                    <FoodCategory 
                        key={category.id} 
                        category={category}
                        isActive={expandedCategoryId == index? true : false}
                        expandAccordion={() => setExpandedCategoryId(index)}
                        collapseAccordion={() => setExpandedCategoryId(null)}
                    />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;