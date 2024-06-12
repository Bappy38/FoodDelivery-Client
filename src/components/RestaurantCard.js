const RestaurantCard = (props) => {

    const {name, cuisine, rating, deliveryTimeInMinutes, imageUrl} = props.restaurant;

    return (
        <div
            data-testid="resCard" 
            className="p-2 m-2 w-[250px] h-[350px] rounded-md bg-gray-100 hover:bg-gray-200">
            <img
                className="p-2 w-full h-40 rounded-md"
                alt="restaurant-banner"
                src={imageUrl}
                />
            <h3 className="p-2 font-bold">{name}</h3>
            <h4 className="px-2 font-semibold">{cuisine}</h4>
            <h4 className="px-2 font-semibold">{rating} ⭐</h4>
            <h4 className="px-2 font-semibold">{deliveryTimeInMinutes} Minutes</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {

    return (props) => {

        return (
            <div>
                <label className="absolute bg-gray-500 text-white p-2 m-2 rounded-md">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;