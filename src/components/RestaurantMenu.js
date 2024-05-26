import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {restaurantId} = useParams();
    const resInfo = useRestaurantMenu(restaurantId);

    if (resInfo === null){
        return (<Shimmer/>);
    }

    return (
        <div className="flex flex-col items-center">
            
            <div className="flex flex-col px-2 h-[180px] w-[600px]">
                <h1 className="text-2xl mt-3 font-medium">{resInfo?.name}</h1>
                <h2 className="font-bold mt-2">{resInfo?.rating} ⭐</h2>
                <h1 className="text-xl mt-2 font-bold">Deals for you</h1>
            </div>

            <ul className="flex flex-col">
                {
                    resInfo?.menu?.items.map((item) => (
                        <MenuItem key={item.id} menuItem={item}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;