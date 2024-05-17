const RestaurantCard = (props) => {

    const {restaurantName, cuisine, rating, deliveryTime, imgUrl} = props.restaurant;

    return (
        <div className="restaurant-card">
            <img className="res-card-img"
                alt="restaurant-logo"
                src={imgUrl}
                />
            <h3>{restaurantName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;