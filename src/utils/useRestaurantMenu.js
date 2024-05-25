import { useEffect, useState } from "react"

const useRestaurantMenu = (restaurantId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await fetch(process.env.REACT_APP_BASE_API + 'Restaurants/' + restaurantId);
        const json = await response.json();
        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;