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
        <div className="menu">
            <h1>{resInfo?.name}</h1>
            <h2>{resInfo?.rating}</h2>

            <ul className="menu-items">
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