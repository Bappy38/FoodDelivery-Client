import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import FoodCategory from "./FoodCategory";

const RestaurantMenu = () => {
    const {restaurantId} = useParams();
    const resInfo = useRestaurantMenu(restaurantId);

    if (resInfo === null){
        return (<Shimmer/>);
    }

    return (
        <div className="text-center mt-6">
            <h1 className="font-bold text-2xl">{resInfo.name}</h1>
            <h1 className="font-bold">{resInfo.rating}/5 ⭐</h1>
            <h1 className="font-bold">🕒 {resInfo.deliveryTimeInMinutes} minutes</h1>

            <div>
                {resInfo.menu.categories.map((category) => (
                    <FoodCategory key={category.id} category={category}/>
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;