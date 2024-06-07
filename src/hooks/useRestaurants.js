import { useEffect, useState } from "react";

const useRestaurants = (restaurantFilter) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, [restaurantFilter]);

    const fetchRestaurants = async () => {
        
        const response = await fetch(process.env.REACT_APP_BASE_API + 'Restaurants', {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(restaurantFilter)
        });

        const json = await response.json();
        setRestaurants(json);
    }

    return restaurants;
}

export default useRestaurants;