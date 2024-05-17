const RestaurantCard = (props) => {

    const {name, cuisine, rating, deliveryTimeInMinutes, imageUrl} = props.restaurant;

    return (
        <div className="restaurant-card">
            <img className="res-card-img"
                alt="restaurant-logo"
                src={imageUrl}
                />
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTimeInMinutes} Minutes</h4>
        </div>
    )
}

export default RestaurantCard;