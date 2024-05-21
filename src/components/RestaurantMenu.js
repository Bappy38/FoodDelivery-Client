import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {restaurantId} = useParams();

    //useEffect hook with empty dependency array will call it's callback on initial render only
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch(process.env.REACT_APP_BASE_API + 'Restaurants/' + restaurantId);
        const json = await response.json();

        //set useState hook will re-render the component with updated data
        setResInfo(json);
    }

    if (resInfo === null){
        return (<Shimmer/>);
    }

    return (
        <div className="menu">
            <h1>{resInfo?.name}</h1>
            <h2>{resInfo?.rating}</h2>

            <ul className="menu-items">
                {
                    //Whenever we use map in JSX, we should specify the unique key
                    resInfo?.menu?.items.map((item) => (
                        <MenuItem menuItem={item}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;